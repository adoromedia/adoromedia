<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="../../inc/Adoro.asp"-->
<!--include file="../../inc/Adoro.CheckLogin.asp"-->
<!--#include file="../../inc/Adoro.Forms.asp"-->
<!--#include file="../../inc/Adoro.DevForm.asp"-->
<% Adoro.pageName = "formvalidator"; %>
<% Adoro.siteSection = "library" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Form validator, JavaScript user interface component library, Adoro Media Ltd</title>
		<!--#include file="../../inc/head_other.asp"-->	
		<!--#include file="../../inc/head_js.asp"-->	
		<!--#include file="../../inc/head_css.asp"-->	
		<!--#include file="../../inc/head_cssie.asp"-->
		<script type="text/javascript" src="../../js/Adoro/Adoro.FormValidator.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FormRules.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldHighlight.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.FieldMaxLength.js"></script>
		<script type="text/javascript" src="../../js/Adoro/Adoro.DevForm2.js"></script>
	</head>
	<body class="library">
		<div id="container">
			<!--#include file="../../inc/header.asp"-->
			<div id="subContent">
				<!--#include file="../../inc/libraryNavigation.asp"-->
			</div>
			<div id="content">
				<h1>Form validator</h1>
				
				<div class="devNotes">
					<div class="heading">
						<h2>Development notes</h2>
					</div>
					<div class="collapseable">
						<ul class="generic">
							<li>In collaboration with the <a href="http://www.rnib.org.uk"><abbr title="Royal National Institute of the Blind">RNIB</abbr></a> for high accessibility.</li>
							<li>
								It is very highly recommended that a form has only 1 submit button unless your multiple submit buttons run the same action. Useful for long forms.
								If you have more than 1 button it causes an accessiblity problem via using the keyboard.
								<ul>
									<li>When a user presses the enter key the form is submitted. 
									A contextual submit relies on the user clicking with the mouse.</li>
								</ul>
							</li>
							<li>Uses <a href="http://www.jquery.com">JQuery</a> JavaScript library.</li>
							<li>Uses field indicators for all fields for several purposes.
								<ol>
									<li>It is a consistent visual representation of a field.</li>
									<li>Can be styled in many ways to cater for many design patterns.</li>
								</ol>
							</li>
							<li>Use of fieldsets with legends, when a field requires it.</li>
							<li>Some fields will need to use the legend in order to insert errors. The fields that currently meet 
							this criteria are:
								<ul>
									<li>radio group</li>
									<li>checkbox group</li>
								</ul>
							</li>
							<li>With regards to radio or checkbox groups, the server only sees the "name" of the field, so in order to bring focus, 
							using the error messages, the first item in the group must have an ID that is the same as the name. The proceeding radios 
							or checkboxes, have the same name, but will have a different ID (for label useage).</li>
							<li>The document title is updated as well as the error summary display to inform the user of errors.</li>
							<li>Some guidance taken from <a href="http://www.webaim.org/techniques/formvalidation/">WebAIM</a></li>
						</ul>
					</div>
				</div>
				
				<% devForm.showErrors(); %>
										
				<form action="formvalidator.asp" method="post" id="devForm">
					<div class="form">
						<!--Single input-->
						<div class="field">
							<div class="contextualHelpType1">
								<p>This is contextual help before the form element(s).</p>
							</div>
							<div class="indicator">
								<label for="fullName" class="<%devForm.writeErrorClass(["fullName"])%>">Full name <%devForm.writeErrorSpan(["fullName"])%></label>
							</div>
							<div class="singleInput">
								<input type="text" class="text" name="fullName" id="fullName" value="<%=Request.Form("fullName")%>" />
							</div>
						</div>
	
						<!--Single select-->
						<div class="field">
							<div class="indicator">
								<label for="age" class="<%devForm.writeErrorClass(["age"])%>">Age <%devForm.writeErrorSpan(["age"])%></label>
							</div>
							<div class="singleInput">
								<select name="age" id="age">
									<option value="" <%devForm.writeSelected(Request.Form("age"), "")%> >Please select</option>
									<option value="1" <%devForm.writeSelected(Request.Form("age"), "1")%> >1</option>
									<option value="2" <%devForm.writeSelected(Request.Form("age"), "2")%> >2</option>
								</select>
							</div>
						</div>
						
						
						<!--Single checkbox-->
						<div class="field">
							<div class="indicator">
								<span class="label <%devForm.writeErrorClass(["terms"])%>">Terms</span>
							</div>
							<div class="checkboxes">
								<div class="input">
									<input type="checkbox" name="terms" id="terms" value="terms" <%devForm.writeChecked(Request.Form("terms"), "terms")%> />
									<label for="terms">Terms and conditions <%devForm.writeErrorSpan(["terms"])%></label>
								</div>
							</div>
						</div>	
						
						<!--Multiple input-->
						<div class="field">
							<div class="indicator">
								<span class="label <%devForm.writeErrorClass(["day01", "month01", "year01"])%>">Date of birth</span>
							</div>
							<div class="multipleInput">
								<div class="input">
									<label for="day01">Day <%devForm.writeErrorSpan(["day01"])%></label>
									<input type="text" class="text" name="day01" id="day01" value="<%=Request.Form("day01")%>" />
								</div>
								<div class="input">
									<label for="month01">Month <%devForm.writeErrorSpan(["month01"])%></label>
									<input type="text" class="text" name="month01" id="month01" value="<%=Request.Form("month01")%>" />
								</div>
								<div class="input">
									<label for="year01">Year <%devForm.writeErrorSpan(["year01"])%></label>
									<input type="text" class="text" name="year01" id="year01" value="<%=Request.Form("year01")%>" />
								</div>
							</div>
							<div class="contextualHelpType2">
								<p>This is contextual help after the form element(s).</p>
							</div>						
						</div>
						
						<!--Multiple select-->
						<div class="field">
							<div class="indicator">
								<span class="label <%devForm.writeErrorClass(["day02", "month02", "year02"])%>">Date of birth</span>
							</div>
							<div class="multipleInput">
								<div class="input">
									<label for="day02">Day <%devForm.writeErrorSpan(["day02"])%></label>
									<select name="day02" id="day02">
										<option value="" <%devForm.writeSelected(Request.Form("day02"), "")%>>Please select</option>
										<option value="1" <%devForm.writeSelected(Request.Form("day02"), "1")%>>1</option>
										<option value="2" <%devForm.writeSelected(Request.Form("day02"), "2")%>>2</option>
									</select>
								</div>
								<div class="input">
									<label for="month02">Month <%devForm.writeErrorSpan(["month02"])%></label>
									<select name="month02" id="month02">
										<option value="" <%devForm.writeSelected(Request.Form("month02"), "")%>>Please select</option>
										<option value="1" <%devForm.writeSelected(Request.Form("month02"), "1")%>>1</option>
										<option value="2" <%devForm.writeSelected(Request.Form("month02"), "2")%>>2</option>
									</select>
								</div>
								<div class="input">
									<label for="year02">Year <%devForm.writeErrorSpan(["year02"])%></label>
									<select name="year02" id="year02">
										<option value="" <%devForm.writeSelected(Request.Form("year02"), "")%>>Please select</option>
										<option value="1" <%devForm.writeSelected(Request.Form("year02"), "1")%>>1</option>
										<option value="2" <%devForm.writeSelected(Request.Form("year02"), "2")%>>2</option>
									</select>
								</div>
							</div>
						</div>
						
						<!--Checkbox group-->
						
						<div class="field">
							<div class="indicator">
								<span class="label <%devForm.writeErrorClass(["searchEngine"])%>">Favourite search engines</span>
							</div>
							<div class="checkboxes">
								<fieldset>
									<legend><span class="legend">Search engines</span><%devForm.writeErrorSpan(["searchEngine"])%></legend>
									<div class="input">
										<input type="checkbox" name="searchEngine" id="searchEngine" value="Yahoo" <%devForm.writeChecked(Request.Form("searchEngine"), "Yahoo")%> />
										<label for="searchEngine">Yahoo</label>
									</div>
									<div class="input">
										<input type="checkbox" name="searchEngine" id="searchEngine02" value="Live" <%devForm.writeChecked(Request.Form("searchEngine"), "Live")%> />
										<label for="searchEngine02">Live search</label>
									</div>
									<div class="input">
										<input type="checkbox" name="searchEngine" id="searchEngine03" value="Google" <%devForm.writeChecked(Request.Form("searchEngine"), "Google")%> />
										<label for="searchEngine03">Google</label>
									</div>
								</fieldset>
							</div>
						</div>
						
						<!--Radio group-->
						
						<div class="field">
							<div class="indicator">
								<span class="label <%devForm.writeErrorClass(["gender"])%>">Gender</span>
							</div>
							<div class="radios">
								<fieldset>
									<legend><span class="legend">Gender</span><%devForm.writeErrorSpan(["gender"])%></legend>
									<div class="input">
										<input type="radio" name="gender" id="gender" value="Male" <%devForm.writeChecked(Request.Form("gender"), "Male")%> />
										<label for="gender">Male</label>
									</div>
									<div class="input">
										<input type="radio" name="gender" id="gender02" value="Female" <%devForm.writeChecked(Request.Form("gender"), "Female")%> />
										<label for="gender02">Female</label>
									</div>
									<div class="input">
										<input type="radio" name="gender" id="gender03" value="Both" <%devForm.writeChecked(Request.Form("gender"), "Both")%> />
										<label for="gender03">Both</label>
									</div>
									<div class="input">
										<input type="radio" name="gender" id="gender04" value="Don't know" <%devForm.writeChecked(Request.Form("gender"), "Don't know")%> />
										<label for="gender04">Don't know</label>
									</div>								
								</fieldset>
							</div>
						</div>
						
						<!--Textarea-->
						
						<div class="field">
							<div class="indicator">
								<label for="message" class="<%devForm.writeErrorClass(["message"])%>">Message <%devForm.writeErrorSpan(["message"])%></label>
							</div>
							<div class="singleInput">
								<textarea name="message" id="message" cols="30" rows="8"><%=Request.Form("message")%></textarea>
							</div>
						</div>	
						
						<!--File-->
						
						<div class="field">
							<div class="indicator">
								<label for="file" class="<%devForm.writeErrorClass(["file"])%>">File <%devForm.writeErrorSpan(["file"])%></label>
							</div>
							<div class="singleInput">
								<input type="file" name="file" id="file" value="<%=Request.Form("file")%>" />
							</div>
						</div>									
						
						
						<!--Multiple select-->
						
						<div class="field">
							<div class="indicator">
								<label for="friends" class="<%devForm.writeErrorClass(["friends"])%>">Friends <%devForm.writeErrorSpan(["friends"])%></label>
							</div>
							<div class="singleInput">
								<select name="friends" id="friends" size="3" multiple="multiple">
									<option value="Andy" <%devForm.writeSelected(Request.Form("friends"), "Andy")%> >Andy</option>
									<option value="Dan" <%devForm.writeSelected(Request.Form("friends"), "Dan")%> >Dan</option>
									<option value="Marvin" <%devForm.writeSelected(Request.Form("friends"), "Marvin")%> >Marvin</option>
								</select>
							</div>
						</div>					
						
						<!--Submit buttons-->
						
						<div class="action">
							<input class="reset" type="reset" name="resetButton" id="resetButton" value="Clear" />
							
							<input class="submit" type="submit" name="submitButton" id="submitButton" value="Submit" />
							<input class="submit" type="submit" name="contextualSubmitButton" id="contextualSubmitButton" value="Contextual Submit" />
						</div>
					</div>												
				</form>
				
			</div>
			<!--#include file="../../inc/footer.asp"-->
		</div>
		<!--#include file="../../inc/ga.asp"-->
	</body>
</html>