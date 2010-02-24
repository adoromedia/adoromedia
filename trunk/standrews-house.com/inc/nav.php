<?php $cssSelected = "selected";?>
<div id="nav">
    <ul>
        <li class="main <?php if($siteSection == "home") echo $cssSelected; ?>"><a href="index.php">Home</a></li>
        <li class="main <?php if($siteSection == "about") echo $cssSelected; ?>"><a href="about.php">About</a></li>
        <li class="main <?php if($siteSection == "services") echo $cssSelected; ?>">
            <a class="arrow" href="services.php">Services</a>

            <div class="sub hide">
                <ul>
                    <li><a href="offices.php">The offices</a></li>
                    <li><a href="office-plans.php">Plans</a></li>                    
                    <li><a href="virtual-offices.php">Virtual offices</a></li>
                    <li><a href="meeting-room.php">Meeting room</a></li>
                    <li><a href="security.php">Security</a></li>
                    <li><a href="telephones.php">Telephones</a></li>
                </ul>
            </div>
        </li>
        <li class="main <?php if($siteSection == "pricing") echo $cssSelected; ?>"><a href="pricing.php">Pricing</a></li>
        <li class="main <?php if($siteSection == "contact") echo $cssSelected; ?>"><a href="contact.php">Contact</a></li>
    </ul>
</div>
