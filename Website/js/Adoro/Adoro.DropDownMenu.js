//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2008 - 2009 by Adoro Media
	info@adoromedia.com
  	
  	This file is part of Adoro Media open source projects
  	
    Adoro Media projects are free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    The projects are distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    See <http://www.gnu.org/licenses/> for information on the GNU Lesser General Public License.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------

if (typeof Adoro !== "object") { var Adoro = {}; }

/**
 * @class Represents a drop down menu
 * @constructor Create a drop down menu
 * @param {Node} ul The root ul node for the drop down menu
 * @param {Object} options The options for the instance
 */
Adoro.DropDownMenu = function(ul, options) {
	var ul = ul || null;
	if(!ul) return;
	
	var config = {
		subMenuType: "ul",
		offsetLeft: 0,
		offsetTop: 0,
		cssActiveClass: "selected"
	};
	
	if(typeof options === "object") {
		config.subMenuType = (typeof options.subMenuType === "string") ? options.subMenuType : config.subMenuType;
		config.offsetLeft = (typeof options.offsetLeft === "number") ? options.offsetLeft : config.offsetLeft;
		config.offsetTop = (typeof options.offsetTop === "number") ? options.offsetTop : config.offsetTop;
		config.cssActiveClass = (typeof options.cssActiveClass === "string") ? options.cssActiveClass : config.cssActiveClass;
	}
	
	var links = $(ul).find("a"), link, subMenu, subLinks, li;
	for(var i=links.length-1; i>=0;i--) {
		link = links[i];
		
		li = $(link).parent("li")[0] || null;
		// if the link hasn't even got an li then don't handle it
		if(!li) continue;
		
		subMenu = $(li).find(config.subMenuType)[0] || null;
		// if the link doesn't have a sub menu then don't handle it
		if(!subMenu) continue;
		
		new AnchorHandler(link, li, subMenu);
		
		subLinks = $(subMenu).find("a");
		for(var j = subLinks.length-1; j>=0;j-- ) {
			new AnchorHandler(subLinks[j], li, subMenu, link);
		}
	}
	
	/**
	 * The abstraction to handle the interaction between a link and the associated sub menu.
	 * @param {Node} link
	 * @param {Node} li
	 * @param {Node} subMenu
	 * @param {Node} subMenuLink
	 */
	function AnchorHandler(link, li, subMenu, subMenuLink) {
		var me = this;
		link = link;
		li = li;
		subMenu = subMenu;
		subMenuLink = subMenuLink || link; // subMenuLink only exists for links in the sub menu otherwise its the same as link.
		
		// sublinks do not need this bit - only focus and blur - so not sure best way to make efficient yet
		$(link).bind("mouseenter", showSubMenu);
		$(li).bind("mouseleave", hideSubMenu);
		
		$(link).bind("focus", showSubMenu);
		$(link).bind("blur", hideSubMenu);
		
		function showSubMenu() {
			$(subMenuLink).addClass(config.cssActiveClass);
			$(subMenu).css({
				left: config.offsetLeft+"px",
				top: $(li).height()+config.offsetTop+"px",
				zIndex: 10
			});
		}

		function hideSubMenu() {
			$(subMenu).css({"left": "-999999em"});
			$(subMenuLink).removeClass(config.cssActiveClass);
		}
	}
}