<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "carousel"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Carousel, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="carousel, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Carousel jQuery JavaScript component, by Adoro Media." />
		<script type="text/javascript" src="<%=Adoro.URL%>/js/JQuery/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/JQuery/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Adoro/Adoro.Carousel.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>/js/Site/Projects/Site.Projects.Carousel.js"></script>
		<link rel="stylesheet" href="<%=Adoro.URL%>/css/Site/projects.css" type="text/css" />
	</head>
	<body class="projects">
		<div id="container">

			<h1>Carousel</h1>
			<h2>About</h2>
			<ul>
				<li>Uses the YUI Carousel design pattern</li>
				<li>Very highly configurable</li>
			</ul>
			
			<h2>Demo</h2>
			
			<h3>Horizontal carousel</h3>
			<div id="carousel06">
				<div class="clip">
					<ul>
						<li><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/2.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/3.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/4.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/5.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/6.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/7.jpg" width="150" height="118" alt=""/></li>
					</ul>
				</div>
			</div>						

			<h3>Vertical carousel</h3>
			<div id="carousel07">
				<div class="clip">
					<ul>
						<li><img src="../../img/carousel/1.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/2.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/3.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/4.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/5.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/6.jpg" width="150" height="118" alt=""/></li>
						<li><img src="../../img/carousel/7.jpg" width="150" height="118" alt=""/></li>
					</ul>
				</div>
			</div>
				
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>