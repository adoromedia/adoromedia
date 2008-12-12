<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->

<% Adoro.pageName = "googlemap"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Google map, JavaScript component, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/maps.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->	
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhTJZH0KQb7xxghXEcd9uA8ad5kyphRToxU0pQytWuskeRVROag3aZv_kw" type="text/javascript"></script><script type="text/javascript" src="js/J2/J2.js"></script>			
		<script type="text/javascript" src="../../js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var myMap1 = new Adoro.GoogleMap(document.getElementById("map1"), "9 The Rose Walk, Radlett, WD7 7JS");
				var myMap2 = new Adoro.GoogleMap(document.getElementById("map2"), "Selfridges, London");
			});
		</script>
	</head>
	<body class="library">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="../../inc/logo.asp"-->
					<!--#include file="../../inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Google map</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Utilising the Google Maps API, this will create a google map.</li>
					</ul>
					<h2>Demo</h2>
					<div id="map1" class="map"></div>
					<div id="map2" class="map"></div>					
						
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>