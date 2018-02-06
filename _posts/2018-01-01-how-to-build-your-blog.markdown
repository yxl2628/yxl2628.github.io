---
layout: post
title: 如何搭建自己的博客
date: 2018-1-1 10:14:53
---


### 自述

本来只是想找一个简单的web服务器，部署几个静态页面，为了这么小的需求，去租用服务器有点大材小用，然后，偶然间发现了github竟然提供了gitpages这么厉害的功能，索性就把那几个静态页面部署上去了。

之后的几天，我就在想，github提供了这么一个服务，肯定不仅仅是为了部署静态页面测试用而已，我就在想我完全可以用它来做自己的博客主页的。

接下来就是想找一下github的好看的博客模板，偶然间发现了Jekyll还能解析markdown，生成静态网站，这简直就是amazing。

### 在哪寻找好看的模板

在[jekyll](https://github.com/jekyll/jekyll/wiki/sites)上给出了大量优秀的个人博客，我们可以直接fork下来，节省自己的时间。

### 文件结构说明
down下来的jekyll模板，目录结构是这样的：

  ├── _config.yml    
  ├── _drafts    
  |   ├── begin-with-the-crazy-ideas.textile    
  |   └── on-simplicity-in-technology.markdown    
  ├── _includes    
  |   ├── footer.html    
  |   └── header.html    
  ├── _layouts    
  |   ├── default.html    
  |   └── post.html    
  ├── _posts    
  |   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile    
  |   └── 2009-04-26-barcamp-boston-4-roundup.textile    
  ├── _data    
  |   └── members.yml    
  ├── _site    
  └── index.html    

#### _config.yml
  保存配置数据。很多配置选项都会直接从命令行中进行设置，但是如果你把那些配置写在这儿，你就不用非要去记住那些命令了。
#### _drafts
  drafts 是未发布的文章。这些文件的格式中都没有 title.MARKUP 数据。学习如何使用 drafts.
#### _includes
  你可以加载这些包含部分到你的布局或者文章中以方便重用。可以用这个标签  {% include file.ext %} 来把文件 _includes/file.ext 包含进来。
#### _layouts
  layouts 是包裹在文章外部的模板。布局可以在 YAML 头信息中根据不同文章进行选择。 这将在下一个部分进行介绍。标签 {{ content }} 可以将content插入页面中。
#### _posts
  这里放的就是你的文章了。文件格式很重要，必须要符合: YEAR-MONTH-DAY-title.MARKUP。 The permalinks 可以在文章中自己定制，但是数据和标记语言都是根据文件名来确定的。
#### _data
  Well-formatted site data should be placed here. The jekyll engine will autoload all yaml files (ends with .yml or .yaml) in this directory. If there's a file members.yml under the directory, then you can access contents of the file through site.data.members.
#### _site
  一旦 Jekyll 完成转换，就会将生成的页面放在这里（默认）。最好将这个目录放进你的 .gitignore 文件中。
#### index.html and other HTML, Markdown, Textile files
  如果这些文件中包含 YAML 头信息 部分，Jekyll 就会自动将它们进行转换。当然，其他的如 .html， .markdown，  .md，或者 .textile 等在你的站点根目录下或者不是以上提到的目录中的文件也会被转换。
#### Other Files/Folders
  其他一些未被提及的目录和文件如  css 还有 images 文件夹， favicon.ico 等文件都将被完全拷贝到生成的 site 中。 这里有一些使用 Jekyll 的站点，如果你感兴趣就来看看吧。
