<!--#include file="../../inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<% Adoro.pageName = "dropdown"; %>
<% Adoro.siteSection = "projects" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Drop down menu, jQuery JavaScript library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<link rel="stylesheet" href="../../css/dropdownmenu.css" type="text/css" />
		<link rel="stylesheet" href="../../css/dropdownmenu2.css" type="text/css" />
		<!--#include file="../../inc/head_cssie.asp"-->		
		<script type="text/javascript" src="../../js/JQuery/jquery.bgiframe.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.DropDownMenu.js"></script>
		<script type="text/javascript" src="../../js/SWFObject/swfobject.js"></script>
	
		<script type="text/javascript">
			swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
				var ulNode1 = $("#dropDownMenu ul")[0] || null;
				new Adoro.DropDownMenu(ulNode1, {
					offsetLeft: -1
				});
				
				var ulNode2 = $("#menu ul")[0] || null;
				new Adoro.DropDownMenu(ulNode2, {
					subMenuType: "div",
					offsetTop: -1,
					offsetLeft: -3,
					cssActiveClass: "hover"
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
					<h1>Drop down menu</h1>
					
					<h2>About</h2>
					<ul class="generic">
						<li>A lightweight drop down menu using nested list elements.</li>
						<li>Currently only supports 1 level.</li>
						<li>Currently only supports a horizontal version.</li>
						<li>Drop downs work with JS only.</li>
						<li>No css z-index issues.</li>
						<li>Can navigate the links with the keyboard (focus/blur).</li>
						<li>Can have any content as a sub menu - doesn't have to be a ul.</li>
						<li>Uses the <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
					</ul>
					
					<h2>Demo</h2>
					<div id="dropDownMenu">
						<ul>
							<li class="first">
								<a href="#1">Pharmacy &#038; Health</a>
								<ul>
									<li><a href="#2"><span>Electrical</span></a></li>
									<li><a href="#3"><span>Offers</span></a></li>
									<li><a href="#4"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#5"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li><a href="#6"><span>Beauty</span></a></li>
							<li>
								<a href="#7"><span>Gift</span></a>
								<ul>
									<li><a href="#8"><span>Skincare</span></a></li>
									<li><a href="#9"><span>Hair</span></a></li>
									<li><a href="#10"><span>Offers</span></a></li>
									<li><a href="#11"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#12"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li class="selected">
								<a href="#13"><span>Men</span></a>
								<ul>
									<li><a href="#14"><span>Skincare</span></a></li>
									<li><a href="#15"><span>Hair</span></a></li>
									<li><a href="#16"><span>Fragrance</span></a></li>
									<li><a href="#17"><span>Electrical</span></a></li>
									<li><a href="#18"><span>Offers</span></a></li>
									<li><a href="#19"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#20"><span>Hair Retention</span></a></li>
								</ul>
							</li>
							<li class="last">
								<a href="#21"><span>Seasonal</span></a>
								<ul>
									<li><a href="#22"><span>Skincare</span></a></li>
									<li><a href="#23"><span>Bath &#038; Body</span></a></li>
									<li><a href="#24"><span>Dental</span></a></li>
									<li><a href="#25"><span>Accessories</span></a></li>
									<li><a href="#26"><span>Electrical</span></a></li>
									<li><a href="#27"><span>Offers</span></a></li>
									<li><a href="#28"><span>Weight Loss</span></a></li>
									<li class="last"><a href="#29"><span>Hair Retention</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="form">
						<div class="field">
							<div class="indicator"><label for="iframedd">Ifame drop down test</label></div>
							<div class="singleInput">
								<select id="iframedd"><option value="1">Iframe zIndex issue fixed longer select</option></select>		
							</div>
						</div>
					</div>
					<div id="flash">
						My flash here
					</div>
					
					<div id="menu">
						<ul>
							<li class="buy">
								<a href="#">
									<span class="tl">
										<span class="br">
											<span class="tr">Buy and sell<br/> investment property</span>
										</span>
									</span>
								</a>
								<div class="subMenu">
									<div class="subMenuInner">
										<p class="intro">Information and advice about the range of different financial products that are available</p>
										<div class="lists">
											<div class="list1">
												<h2>Services</h2>
												<ul>
													<li><a href="#inner">Independent financial advice</a></li>
													<li><a href="#inner">Mortgage advice</a></li>
													<li><a href="#inner">Buy to let mortgage</a></li>
													<li><a href="#inner">Investment planning</a></li>
													<li><a href="#inner">Home Information Pack</a></li>
													<li><a href="#inner">Investment</a></li>
													<li><a href="#inner">Tax planning</a></li>
												</ul>
											</div>
											<div class="list2">
												<h2>Knowledge</h2>
												<ul>
													<li><a href="#inner">Remortgage</a></li>
													<li><a href="#inner">Auction mortgage</a></li>
													<li><a href="#inner">Birdging finance</a></li>
													<li><a href="#inner">Development finance</a></li>
													<li>
														<a href="#inner">Portfolio finance</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>													
													</li>
													<li><a href="#inner">Commercial investments</a></li>
													<li><a href="#inner">Mezzanine finance</a></li>
													<li>
														<a href="#inner">Secured loans</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<div class="list3">
												<h2>Tools</h2>
												<ul>
													<li><a href="#inner">Mortgage calculator</a></li>
													<li><a href="#inner">Mortgage finder</a></li>
													<li><a href="#inner">Calculator rental yield</a></li>
												</ul>
											</div>	
										</div>																
									</div>
								</div>								
							</li>
							<li class="finance">
								<a href="#FINANCE"><span>Finance</span></a>
								<div class="subMenu">
									<div class="subMenuInner">
										<p class="intro">Information and advice about the range of different financial products that are available</p>
										<div class="lists">
											<div class="list1">
												<h2>Services</h2>
												<ul>
													<li><a href="#inner">Independent financial advice</a></li>
													<li><a href="#inner">Mortgage advice</a></li>
													<li><a href="#inner">Buy to let mortgage</a></li>
													<li><a href="#inner">Investment planning</a></li>
													<li><a href="#inner">Home Information Pack</a></li>
													<li><a href="#inner">Investment</a></li>
													<li><a href="#inner">Tax planning</a></li>
												</ul>
											</div>
											<div class="list2">
												<h2>Knowledge</h2>
												<ul>
													<li><a href="#inner">Remortgage</a></li>
													<li><a href="#inner">Auction mortgage</a></li>
													<li><a href="#inner">Birdging finance</a></li>
													<li><a href="#inner">Development finance</a></li>
													<li>
														<a href="#inner">Portfolio finance</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>													
													</li>
													<li><a href="#inner">Commercial investments</a></li>
													<li><a href="#inner">Mezzanine finance</a></li>
													<li>
														<a href="#inner">Secured loans</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<div class="list3">
												<h2>Tools</h2>
												<ul>
													<li><a href="#inner">Mortgage calculator</a></li>
													<li><a href="#inner">Mortgage finder</a></li>
													<li><a href="#inner">Calculator rental yield</a></li>
												</ul>
											</div>	
										</div>																
									</div>
								</div>
							</li>
							<li class="insurance">
								<a href="#"><span>Insurance</span></a>
								<div class="subMenu">
									<div class="subMenuInner">
										<p class="intro">Information and advice about the range of different financial products that are available</p>
										<div class="lists">
											<div class="list1">
												<h2>Services</h2>
												<ul>
													<li><a href="#inner">Independent financial advice</a></li>
													<li><a href="#inner">Mortgage advice</a></li>
													<li><a href="#inner">Buy to let mortgage</a></li>
													<li><a href="#inner">Investment planning</a></li>
													<li><a href="#inner">Home Information Pack</a></li>
													<li><a href="#inner">Investment</a></li>
													<li><a href="#inner">Tax planning</a></li>
												</ul>
											</div>
											<div class="list2">
												<h2>Knowledge</h2>
												<ul>
													<li><a href="#inner">Remortgage</a></li>
													<li><a href="#inner">Auction mortgage</a></li>
													<li><a href="#inner">Birdging finance</a></li>
													<li><a href="#inner">Development finance</a></li>
													<li>
														<a href="#inner">Portfolio finance</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>													
													</li>
													<li><a href="#inner">Commercial investments</a></li>
													<li><a href="#inner">Mezzanine finance</a></li>
													<li>
														<a href="#inner">Secured loans</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<div class="list3">
												<h2>Tools</h2>
												<ul>
													<li><a href="#inner">Mortgage calculator</a></li>
													<li><a href="#inner">Mortgage finder</a></li>
													<li><a href="#inner">Calculator rental yield</a></li>
												</ul>
											</div>	
										</div>																
									</div>
								</div>								
							</li>
							<li class="let">
								<a href="#"><span>Let and manage<br/> my property</span></a>
								<div class="subMenu">
									<div class="subMenuInner">
										<p class="intro">Information and advice about the range of different financial products that are available</p>
										<div class="lists">
											<div class="list1">
												<h2>Services</h2>
												<ul>
													<li><a href="#inner">Independent financial advice</a></li>
													<li><a href="#inner">Mortgage advice</a></li>
													<li><a href="#inner">Buy to let mortgage</a></li>
													<li><a href="#inner">Investment planning</a></li>
													<li><a href="#inner">Home Information Pack</a></li>
													<li><a href="#inner">Investment</a></li>
													<li><a href="#inner">Tax planning</a></li>
												</ul>
											</div>
											<div class="list2">
												<h2>Knowledge</h2>
												<ul>
													<li><a href="#inner">Remortgage</a></li>
													<li><a href="#inner">Auction mortgage</a></li>
													<li><a href="#inner">Birdging finance</a></li>
													<li><a href="#inner">Development finance</a></li>
													<li>
														<a href="#inner">Portfolio finance</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>													
													</li>
													<li><a href="#inner">Commercial investments</a></li>
													<li><a href="#inner">Mezzanine finance</a></li>
													<li>
														<a href="#inner">Secured loans</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<div class="list3">
												<h2>Tools</h2>
												<ul>
													<li><a href="#inner">Mortgage calculator</a></li>
													<li><a href="#inner">Mortgage finder</a></li>
													<li><a href="#inner">Calculator rental yield</a></li>
												</ul>
											</div>	
										</div>																
									</div>
								</div>								
							</li>
							<li class="tax">
								<a href="#"><span>Tax and legal</span></a>
								<div class="subMenu">
									<div class="subMenuInner">
										<p class="intro">Information and advice about the range of different financial products that are available</p>
										<div class="lists">
											<div class="list1">
												<h2>Services</h2>
												<ul>
													<li><a href="#inner">Independent financial advice</a></li>
													<li><a href="#inner">Mortgage advice</a></li>
													<li><a href="#inner">Buy to let mortgage</a></li>
													<li><a href="#inner">Investment planning</a></li>
													<li><a href="#inner">Home Information Pack</a></li>
													<li><a href="#inner">Investment</a></li>
													<li><a href="#inner">Tax planning</a></li>
												</ul>
											</div>
											<div class="list2">
												<h2>Knowledge</h2>
												<ul>
													<li><a href="#inner">Remortgage</a></li>
													<li><a href="#inner">Auction mortgage</a></li>
													<li><a href="#inner">Birdging finance</a></li>
													<li><a href="#inner">Development finance</a></li>
													<li>
														<a href="#inner">Portfolio finance</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>													
													</li>
													<li><a href="#inner">Commercial investments</a></li>
													<li><a href="#inner">Mezzanine finance</a></li>
													<li>
														<a href="#inner">Secured loans</a>
														<ul>
															<li><a href="#3rd">3rd level page</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<div class="list3">
												<h2>Tools</h2>
												<ul>
													<li><a href="#inner">Mortgage calculator</a></li>
													<li><a href="#inner">Mortgage finder</a></li>
													<li><a href="#inner">Calculator rental yield</a></li>
												</ul>
											</div>	
										</div>																
									</div>
								</div>								
							</li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		<!--#include file="../../inc/footer.asp"-->
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>