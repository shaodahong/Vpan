# Vpan
## vue 一个云盘项目，采用wwebpack构建
### webpack-多页面配置
#### 项目目录结构
```
    ├─dist (生产目录)
    |	└─static
    |	|  └─css
    |	|  └─images
    |	|  ├─index.hash.js
    |	|  ├─page1.hash.js
    |	|  ├─page2.hash.js
    |	|  ├─...
    |   |
    |   ├─index.html
    |   ├─page1.html
    |   ├─page2.html
    |   ├─...
    |
    └─src (开发目录)
        ├─assets (公用资源)
        │  └─css
        │  └─fonts
        │  └─images
        │  └─js
        │
        ├─common (公用组件)
        │  └─components
        │
        └─pages (多页面)
            └─index
            │  └─components
            │  ├─index.html
            │  ├─index.js
            │
            └─page1
               └─components
               ├─page1.html
               ├─page1.js
```
