<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<% Adoro.pageName = "home"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<!-- google site map -->
		<meta name="verify-v1" content="bGLYYM+pPuoZqafHVEOR+Nrjr6S9I03SPJX5xOSnoqU=" />
		<title>Expert website designers, Adoro Media, London, UK</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="adoro media, website, web, bespoke, new, media, solutions, london, UK" />
		<meta name="description" content="Adoro Media is an agency dedicated to building new media solutions. Based in London, England." />		
		<!--#include file="inc/head_css.asp"-->
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_cssie.asp"-->
		
	</head>
	<body id="pgHome">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
				<h1 class="off">Website design specialists</h1>
				<div id="hero">
					<div class="about">
					
					    <h2>A bit about us</h2>
						<p>Established in the industry for 10 years, 
						has given us a credible amount of experience.</p>
						<p>We are very passionate about websites and want
						to create the best online presence for you and
						your business, charity or personal website.</p>
					
						
					</div>
					<div class="featured">
					    
					    <div class="carousel">
						    <div class="clip">
							    <ul>
								    <li>
    								    
								        <a href="http://www.dgretro.com"><img src="img/portfolio/dgretro.jpg" alt="David Goodman Retro Collectables" /></a>
								    </li>
							    </ul>
						    </div>
					    </div>
					    <p class="featured">Featured: <strong>David Goodman Retro Collectables</strong></p>
						<!--<p>Launched in spring 2009, this website application 
						was built using Wordpress 2.7.1 for complete content management
						and the functionality to blog.</p>-->
					</div>
				</div>
				<div id="sections">
					<div id="primary">
						<h2>Want a website?</h2>
						<p>Whether you need a brochure site, a CMS, or an e-commerce web shop, 
						we can help you.</p>
						<p>If your website is not performing in the search engines, or it 
						needs a fresh design or new content then we would love to make a 
						better site for you.</p>
					</div>
					<div id="secondary">
						<h2>Services</h2>
						<p>We have gained a lot of expertise across several
						disciplines in website design and development:</p>
						<ul>
							<li>User friendly website design</li>
							<li>High-end user interaction design</li>
							<li>Natural search engine optimisation</li>
						</ul>
					</div>
					<div id="tertiary">
						<h2>Contact us</h2>
						<p>We can be contacted in several ways. Visit the 
						<a href="<%=Adoro.URL%>/contact.asp">contact details</a> page
						for further information.</p>
					</div>
				</div>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>