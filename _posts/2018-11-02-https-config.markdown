---
layout: post
title: nginx如何配置https
date: 2018-11-2 11:35:56
tags: ngnix
---

# nginx
最近所有互联网网站开始统一将http转为https，那么该如何配置nginx呢？

### nginx 配置
```
events
{
  worker_connections 102400;
  accept_mutex on;
  multi_accept on;
  use epoll;
}

http
{
  include mime.types;
  default_type application/octet-stream;

  limit_req_zone $binary_remote_addr zone=one:10m rate=20r/s;
  limit_conn_zone $binary_remote_addr zone=addr:10m;

  log_format  main  'https ---- $remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

  #access_log  logs/access.log  main;
  sendfile on;
  #tcp_nopush     on;

  #keepalive_timeout  0;
  keepalive_timeout 65;

  # gzip（服务器端开启gip压缩）
  gzip on;
  gzip_buffers 32 4k;
  gzip_comp_level 6;
  gzip_min_length 200;
  gzip_types text/css text/xml application/javascript;
  gzip_vary on;

  # 监听80端口，让http访问自动跳转到https
  server
  {
    listen 80;
    server_name www.xxxx.com;
    rewrite ^(.*) https://$server_name$1 permanent;
  }
  # 443端口，即https默认端口，配置一般不变，只需要改动ssl_certificate和ssl_certificate_key即可
  server
  {
    listen 443;
    access_log  logs/access.log  main;
    server_name xxxx.com;
    ssl on;
    root html;
    index index.html index.htm;
    ssl_certificate ../cert/xxxx.pem;
    ssl_certificate_key ../cert/xxxx.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location /
    {
      limit_req zone=one burst=5 nodelay;
      limit_conn addr 5;
      root html;
      index index.html index.htm;
    }
    # 虚拟路径映射，用于将静态数据隔离出部署文件
    location /alias
    {
      if ( $request_method = OPTIONS )
      {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
        return 200;
      }
      add_header 'Access-Control-Allow-Origin' '*';
      add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization';
      add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
      alias /home/data/;
    }
    location ~*.*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$
    {
      expires max;
    }

    location ~ .*\.(?:js|css)$
    {
      expires max;
    }

    location ~ .*\.(?:htm|html)$
    {
      add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
    }
    # 代理转发到其它应用服务器，比如tomcat
    location /proxy
    {
      if ( $request_method = OPTIONS )
      {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
        return 200;
      }
      add_header 'Access-Control-Allow-Origin' '*';
      add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization';
      add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
      proxy_pass http://127.0.0.1:3456/tomcatapi;
    }
  }
}
```
