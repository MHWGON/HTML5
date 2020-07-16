链接：
HTML中的链接叫做超链接
链接不一定是文本，链接可以是任意的HTML元素
<a href="" title="" target=""></a>
!!注意：如果地址末尾没有，你可能向服务器发送两个请求，许多服务器会自动在末尾地址添加一个/然后创建一个新的请求
如果没有前面的HTTP协议，指向同一个文件夹下面的文件
target属性:
_blank:在新窗口或者选项卡中打开链接的文档
—self：在当前窗口中打开链接的文档
_parent:在父框架爱中打开
—top：在窗口的主题中打开链接的文档
framename：在指定的框架中打开链接的文档
用按钮作为链接：(按钮的功能可以是链接的跳转)
<button onclick=document.location="http://www.baidu.com/">Location</button>
title属性：
当鼠标移动到元素上面时，显示链接的地址
外部路径：
1.https：//    2../html/index.html  3.index.html
链接颜色：
a:link{}  访问前 color：green
a:visit{}  访问之后
a:hover{}   鼠标放上面时 color：red
a:visit{}   鼠标按下时   color:yellow
书签：
使用id属性(id="value)定义页面中的链接
<a href="index.html#id"></a>
<img src="" alt=""/>width height 单位用像素  Style中单位有多种 <img>标签加上宽度、高度
图片的浮动：float
屏幕阅读器：
将HTML元素转化为文字，可以转化为语音
图像映射：
<img src="" usemap="#workmap"/>
<map name="workmap">
<area shape="react" coords="" alt="" href="">
</map>
PICTURE元素
<picture>元素允许为不同的设备或屏幕显示不同的大小 (自适应问题)
<picture>
<source media-"(min-width:650px)" srcset="bird.jpg"> 
<img src="bird.jpg">
</source>
HTML表格:
表头标签用th定义
跨多行的单元格：<rowspan>  跨多列 <colspan> 表格标题 <caption>
描述列表：每个列表都有一个描述
cellspacing  规定单元格之间的空间
cellpadding  规定单元边沿与其内容之间的空白