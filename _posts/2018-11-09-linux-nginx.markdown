---
layout: post
title: Linux下安装nginx
date: 2018-11-9 14:00:53
tags: ngnix
---

### 安装依赖
`yum install gcc`
`yum install pcre-devel`
`yum install zlib zlib-devel`
`yum install openssl openssl-devel`
或者同时安装
`yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel`

### 下载nginx安装包
```
//创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.g
```

###安装nginx
```
//进入nginx目录
cd /usr/local/nginx
//执行命令
./configure
//执行make命令
make
//执行make install命令
make install
```

### 重新编译，增加ssl模块
```
//进入nginx目录
cd /usr/local/nginx
//查看nginx版本机器参数
/usr/local/nginx/sbin/nginx -V
//重新编译
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
//make编译
make
//测试是否成功
/usr/local/nginx/sbin/nginx -t
```
> 注意，千万不要在make install了

### nginx常用命令
```
//启动命令
安装路径下的/nginx/sbin/nginx
//停止命令
安装路径下的/nginx/sbin/nginx -s stop
或者 : nginx -s quit
//重启命令
安装路径下的/nginx/sbin/nginx -s reload
```
