meta标签：
<meta name="" content="">  
块元素(block)
行内元素
div 元素通常用作其它HTML元素的容器
span 元素通常用作一些文本的元素
class 标签名对大小写敏感  为具有相同类名的元素定义相同的样式(类选择器)
span{} 元素选择器
id属性
id属性用于为HTML元素指定唯一的id(该值在HTML中是唯一的)
iframe
iframe用于在网页中显示网页，通过<iframe>标签定义，通过src属性指定新的网页  页面中会显示一个包含目标网页的小窗口
<iframe src="http://www.baidu.com/" name="iframe_a"></iframe>
<div>
<a href="http://www.163.com/" target="iframe_a">点我</a>
</div>
float      https://www.cnblogs.com/shiy/p/6528619.html 
float属性定义元素向哪个方向浮动，以往这个属性总是应用于图像，使文本围绕在图像周围
不过在CSS中任何元素都可以浮动。浮动的元素会生成一个块级框，而不论它是何种元素
JavaScript
<script>标记用于定义客户端脚本(Javascript)
innerHTML  innerText
noScript
如果浏览器中禁用脚本或浏览器不支持客户端脚本，那么<noscript>提供了替代的内容
Head
<head>元素是所有头元素的容器
<title> <style> <link> <meta>
<meta>(源信息)元素用于指定使用哪个字符集，页面描述，关键字，作者和其它数据
这些元数据都会被浏览器搜索引擎和其它Web服务器使用
<meta charset="UTF-8">
<meta name="description" content="青洋葱">
<meta name="keywords" content="HTML CSS XML JavaScript">
<meta http-equiv="refresh" content="30">  //30秒自动刷新
窗口设置
<meta name="viewport" content="width=device-width intial-scale=1.0">
viewport就是设备的屏幕上能用来显示我们网页的那一块区域
viewport标记，用于指定用户是否可以缩放Web页面，并对相关的内容进行设定
width 和 height 分别指示视图区的宽度和高度。device-width表示 视图宽度即为屏幕的宽度
initial-scale用于设置Web页面的初始缩放比例，设置为1.0则显示未经缩放的Web页面
maximum-scale和minnimum 设置用户对于web页面的缩放比例的限制。值的范围是0.25~1.0之间
user-scalable指定用户是否可以缩放视图区，即缩放web页面的视图
<base>
为页面设置img的路径 src="base"
布局元素
<nav>为导航链接定义容器
<section>定义文档中的一个区块
<article>定义局部自包含的文章
<aside>内容之外的内容(像侧边栏)
<footer>定义文档或节的页表
<details>定义额外的详细信息
<summary>为<detials>元素定义标题
常用的布局方式：
CSS framework
CSS float proerty
CSS flexbox
CSS grid   //栅格化
CSS命名规范  BEM    https://bemcss.com/
思路：项目开发中每个组件都是独一无二的，名字也是独一无二的，组件内部元素加上组件名，并用元素的名字作为选择器，自然组件内的样式不会与组件外的样式冲突了
通过组件名的为一性来保证选择器的为一性，从而保证样式不会污染到组件外
BEM的命名规则:block-name_element-name_modifier-name  模块名+元素名+修饰器名
             blockName_elementName_modifierName
例如：我们有联系页面，路径是/pages/contact/。那么该页面的模块名可以是page-contact，其名下元素均以page-contact__element-name命名。
BEM保证样式不冲突的核心就是：在元素名中添加唯一的标识。这个标识在BEM中对应的是模块名,也可能是一个独一无二的乱序字符串。
CSS3 @media查询
重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
@media screen and(max-width:300px){  //如果文档宽度小于300px,则修改背景颜色
    body{ background-color:red}   
}
使用媒体查询来制作响应式设计:
@media screen and(max-width:400px){    //如果文档宽度小于400px，则页面会作出相应修改
		.left,
		.middle,
		.right{
			width: 20%;
		}
link标签可以链接的内容：
1.链接外部样式表
<link rel="stylesheet" type="text/css" href="css/reset.css">
2.链接一个外部的icon，用于浏览器的栏目图标和收藏夹图标
<link rel="icon" href="favicon.ico">
3.rel="elternate" 可以定义另一个文档，可以是Pdf，另外一种语言，另外一种CSS样式
<link rel="alternate" href="url">
4.rel="author license" 规定一些作者和版权相关的信息
<link rel="author license" href="url">
5.rel="canonical"  用来定义一个权威的版本，保证内容的正确性
<link rel="canonical" href="url"> url指向html文档，使权威版本，内容更加正确，方便搜索引擎分析
6.rel="peconect" 或者"rel"="prefetch" 或者 rel="preload" 用于加快网页的一个快速速度类型，部分浏览器实现了
preconnect 是告知浏览器提前连接指定的url;
prefetch   告知浏览器立刻取来url所指向的资源
preload    告知浏览器预加载一些指定的url资源

