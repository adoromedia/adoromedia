<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<ul>
		<li><a href="index.php" class="<?php if($siteSection == "home") echo $cssSelected; ?>">Home</a></li>
		<li><a href="about.php" class="<?php if($siteSection == "about") echo $cssSelected; ?>">About</a></li>
		<li><a href="services.php" class="<?php if($siteSection == "services") echo $cssSelected; ?>">Services</a></li>
		<li><a href="contact.php" class="<?php if($siteSection == "contact") echo $cssSelected; ?>">Contact</a></li>
	</ul>
</div>