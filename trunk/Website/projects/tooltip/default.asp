<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "tooltip"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Tooltip, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="tooltip, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Tooltip jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->			
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.Tooltip.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myTip1 = new Adoro.Tooltip($("a.tooltipAnchor")[0], '<div class="myTooltip">This is my default tooltip with a delay</div>');
				
				$("div.tooltipContainer div.tooltip").hide();
				var myTip2 = new Adoro.Tooltip($("div.tooltipContainer a.tooltipAnchor")[0], $("div.tooltipContainer div.tooltip")[0].innerHTML, {delay: 0,followMouse: true});
				
			});
		</script>
		<style type="text/css">
			div.myTooltip {
				border: 1px solid #404040;
				padding: 2px 6px;
				background-color: #FFFFE1;
				font-size: 11px;
			}
			
			div.yo {
				width: 500px;
				border: 2px solid #898F2C;
				background: #ffffff;
				padding: 10px;
			}
			
			div.yo p {
				margin: 0px;
			}
		</style>
	</head>
	<body class="projects">
		<div id="container">
			<div id="header">
				<!--#include file="../../inc/logo.asp"-->
				<!--#include file="../../inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<%
					var breadCrumbParts = [Adoro.Breadcrumb.home,Adoro.Breadcrumb.projects,	{
						text: "Tooltip"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->	
				<div id="primary">
					<h1>Tooltip</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create a tooltip by specifying an activator and some HTML to show inside a tooltip.</li>
						<li>The HTML for the tooltip can come from the DOM or inserted on the fly.</li>
						<li>Will check that it doesn't fall off-screen.</li>
						<li>Different tooltips can have different content and different styles.</li>
						<li>Will construct itself and destroy itself on showing and hiding.</li>
						<li>Can be configured
							<ul>
								<li>to follow the mouse.</li>
								<li>to show for a certain amount of time then hide.</li>
								<li>to be a certain offset top or bottom from it's activator.</li>
							</ul>
						</li>
					</ul>
					<h2>Demo</h2>
					<p><a class="tooltipAnchor" href="#">Default tooltip</a></p>
					
					<div class="tooltipContainer">		
						<p><a class="tooltipAnchor" href="#">Tracking toolip</a></p>
						<div class="tooltip">
							<div class="yo"><p>This is a tooltip that follows the mouse, and has custom style</p></div>
						</div>
					</div>
				</div>
				<div id="secondary">
					<% var projectsShowDescription = false; var wrapTag = false;%>
					<!--#include file="../../inc/projectsNavigation.asp"-->
				</div>	
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>				
