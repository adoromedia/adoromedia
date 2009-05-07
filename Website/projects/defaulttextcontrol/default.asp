<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "defaulttextcontrol"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Default text control, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<meta name="keywords" content="default, text, input, text, fields, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Default text control jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->		
		<script type="text/javascript" src="../../js/Adoro/Adoro.DefaultTextControl.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myInputDefault1 = new Adoro.DefaultTextControl(document.getElementById("search"));
				var myInputDefault2 = new Adoro.DefaultTextControl(document.getElementById("different"));
			});
		</script>	
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
						text: "Default text control"
					}];
				%>
				<!--#include file="../../inc/breadcrumb.asp"-->							
				<div id="primary">
					<h1>Default text control</h1>
					<h2>About</h2>
					<ul>
						<li>Field(s) will clear default value on focus but if no new text is written into the field,
						the default value returns.</li>
						<li>Often seen on search boxes in the header of a website.</li>
					</ul>
					
					<h2>Demo</h2>
					<form>
						<div class="form">
							<div class="field">
								<div class="indicator">
									<label for="search">Search</label>
								</div>
								<div class="singleInput">
									<input class="text" type="text" name="search" id="search" value="search text..." />
								</div>
							</div>
							<div class="field">
								<div class="indicator">
									<label for="different">Different</label>
								</div>
								<div class="singleInput">
									<input class="text" type="text" name="different" id="different" value="Please enter some different" />
								</div>
							</div>						
						</div>
					</form>
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