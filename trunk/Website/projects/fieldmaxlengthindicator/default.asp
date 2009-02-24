<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "fieldmaxlength"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Field max length indicator, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->
		<meta name="keywords" content="Field, max, length, indicator, JavaScript, jQuery, component, script, adoro, media" />
		<meta name="description" content="Field length max indicator,  jQuery JavaScript component, by Adoro Media." />
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->		
		<link rel="stylesheet" href="../../css/tooltip.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->	
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldMaxLengthIndicator.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var el01 = $('<p class="remaining"></p>')[0];
				var field01 = document.getElementById("search");
				if(field01 === null) return;
				field01.parentNode.appendChild(el01);
				var myFieldMax = new Adoro.FieldMaxLengthIndicator(field01,{
					statusIndicator: el01,
					max: 50,
					beforeText: "Information: ",
					afterText: " chars remaining!"
				});
				
				var el02 = $('<p class="remaining"></p>')[0];
				var field02 = document.getElementById("different");
				if(field02 === null) return;
				field02.parentNode.appendChild(el02);
				var myFieldMax = new Adoro.FieldMaxLengthIndicator(field02,{
					statusIndicator: el02,
					max: 50,
					beforeText: "Information: ",
					afterText: " chars remaining!"
				});
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
					<h1>Field max length indicator</h1>
					<h2>About</h2>
					<ul class="generic">
						<li>Create max length validators and indicators for associated inputs and textareas.</li>
						<li>Customise indicator output and max length of characthers.</li>
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
									<textarea id="different" name="different"></textarea>
								</div>
							</div>						
						</div>
					</form>
					
					<h2>Example setup</h2>
					<!--#include file="../../inc/code/fieldmaxlengthindicator.asp"-->				
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>