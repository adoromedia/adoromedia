$.namespace("SF");
SF.SearchComplete = new (function() {
	$(document).ready(init);

	var minLength = 2;
	var data = [];
	var maxResults = 20;

	function DataItem(value, valueType, deptName, url) {
		this.value = value;
		this.valueType = valueType;
		this.deptName = deptName;
		this.url = url;
	};
	
	function addDataItem(value, valueType, deptName, url) {
		data.push(new DataItem(value, valueType, deptName, url));
	};
	
	function init() {
		var searchField = document.getElementById("searchbox");
		if(!searchField) return;
		$(searchField).attr("autocomplete", "off");
		$(searchField).bind("focus", searchField_onFocus);			
		$(searchField).bind("blur", searchField_onBlur);	
		
		var ac = new Adoro.AutoComplete(searchField, data, { maxResults: maxResults,minLength: minLength, objectMember: "value", onItemBound: onItemBound, onFilteredListDraw:onFilteredListDraw });
		ac.activate();
	};
	
	function searchField_onFocus(e) {
		var container = document.getElementById("globalSearch");
		$(container).addClass("globalSearchFocused");
	}
	
	function searchField_onBlur(e) {
		var container = document.getElementById("globalSearch");
		$(container).removeClass("globalSearchFocused");
	}	
	
	function setMaxResults(value) {
		maxResults = value;
	};
	
	function setMinLength(length) {
		minLength = length;
	};
	
	function onItemBound(data) {
		if(data.valueType === "brand") {
			$(this).addClass("brand");
		}
		else {
			$(this).addClass("category");
		}

	};
	
	function onFilteredListDraw(data) {
		$(data.nodes).removeClass("divider");
		if(!needsDivider(data)) return;
		
		var li = getFirstCategoryNode(data);
		$(li).addClass("divider");
	};
	
	function getFirstCategoryNode(data) {
		var node = null;
		for(var i = 0; i < data.nodes.length; i++) {
			node = data.nodes[i];
			if($(node).hasClass("brand")) continue;
			if($(node).hasClass("category")) {
				break;
			}
		};
		return node;
	};
	
	function needsDivider(data) {
		var hasBrands = false;
		var hasCategories = false;
		var node = null;
		for(var i = 0; i < data.nodes.length; i++) {
			node = data.nodes[i];
			
			if(hasBrands && hasCategories) {
				break;
			}
			
			if($(node).hasClass("category")) {
				hasCategories = true;
			}
			
			if($(node).hasClass("brand")) {
				hasBrands = true;
			}
		};
				
		return (hasBrands && hasCategories);
	};
	
	// on click of the document remove the node from dom
	
	$(document).bind("click", documentClick);
	
	
	function documentClick() {
		$("ul.autoCompleteList").remove();
	};
	
	this.addDataItem = addDataItem;
	this.setMinLength = setMinLength;
	this.setMaxResults = setMaxResults;
	
});


// STUB
//$.namespace("SF.SearchComplete"); SF.SearchComplete.setMinLength(2); SF.SearchComplete.addDataItem("Accessories", "category"); SF.SearchComplete.addDataItem("Accessories", "category"); SF.SearchComplete.addDataItem("Accessories", "category"); SF.SearchComplete.addDataItem("Accessories", "category"); SF.SearchComplete.addDataItem("Accessories1", "category"); SF.SearchComplete.addDataItem("Airfix", "brand"); SF.SearchComplete.addDataItem("B17", "category"); SF.SearchComplete.addDataItem("B18", "category"); SF.SearchComplete.addDataItem("B19", "category"); SF.SearchComplete.addDataItem("B20", "category"); SF.SearchComplete.addDataItem("B21", "category"); SF.SearchComplete.addDataItem("B22", "category"); SF.SearchComplete.addDataItem("B23", "category"); SF.SearchComplete.addDataItem("B24", "category"); SF.SearchComplete.addDataItem("B25", "category"); SF.SearchComplete.addDataItem("Bakeware", "category"); SF.SearchComplete.addDataItem("Bamix", "brand"); SF.SearchComplete.addDataItem("Bathmats", "category"); SF.SearchComplete.addDataItem("Bathrobes & Slippers", "category"); SF.SearchComplete.addDataItem("Bathrobes & Slippers", "category"); SF.SearchComplete.addDataItem("Bathroom Accessories", "category"); SF.SearchComplete.addDataItem("Bathroom Furniture", "category"); SF.SearchComplete.addDataItem("Bathroom Textiles", "category"); SF.SearchComplete.addDataItem("Beaumark", "brand"); SF.SearchComplete.addDataItem("Beauty", "category"); SF.SearchComplete.addDataItem("Bedding Sets", "category"); SF.SearchComplete.addDataItem("Bedlinen", "category"); SF.SearchComplete.addDataItem("Bedlinen", "category"); SF.SearchComplete.addDataItem("Bedroom Accessories", "category"); SF.SearchComplete.addDataItem("Bedroom Furniture", "category"); SF.SearchComplete.addDataItem("Beds & Headboards", "category"); SF.SearchComplete.addDataItem("Bedspreads", "category"); SF.SearchComplete.addDataItem("Beldorm", "brand"); SF.SearchComplete.addDataItem("Belkin", "brand"); SF.SearchComplete.addDataItem("Birmingham H", "category"); SF.SearchComplete.addDataItem("Blankets", "category"); SF.SearchComplete.addDataItem("Boss", "brand"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Boss", "category"); SF.SearchComplete.addDataItem("Brabantia", "brand"); SF.SearchComplete.addDataItem("Brand 16", "category"); SF.SearchComplete.addDataItem("Brand1", "brand"); SF.SearchComplete.addDataItem("Brand1", "category"); SF.SearchComplete.addDataItem("Brand1", "category"); SF.SearchComplete.addDataItem("Brand1", "category"); SF.SearchComplete.addDataItem("Brand10", "category"); SF.SearchComplete.addDataItem("Brand11", "category"); SF.SearchComplete.addDataItem("Brand12", "category"); SF.SearchComplete.addDataItem("Brand13", "category"); SF.SearchComplete.addDataItem("Brand14", "category"); SF.SearchComplete.addDataItem("Brand15", "category"); SF.SearchComplete.addDataItem("Brand2", "category"); SF.SearchComplete.addDataItem("Brand3", "category"); SF.SearchComplete.addDataItem("Brand4", "category"); SF.SearchComplete.addDataItem("Brand5", "category"); SF.SearchComplete.addDataItem("Brand6", "category"); SF.SearchComplete.addDataItem("Brand7", "category"); SF.SearchComplete.addDataItem("Brand8", "category"); SF.SearchComplete.addDataItem("Brand9", "category"); SF.SearchComplete.addDataItem("Brandroom", "category"); SF.SearchComplete.addDataItem("Brandroom", "category"); SF.SearchComplete.addDataItem("Brandroom", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Brands", "category"); SF.SearchComplete.addDataItem("Burberry", "brand"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("Burberry", "category"); SF.SearchComplete.addDataItem("CALVIN KLEIN", "brand"); SF.SearchComplete.addDataItem("CHANTELLE", "brand"); SF.SearchComplete.addDataItem("CHARNOS", "brand"); SF.SearchComplete.addDataItem("Cabinets", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Categories", "category"); SF.SearchComplete.addDataItem("Chef''s Choice", "brand"); SF.SearchComplete.addDataItem("Chests & Drawers", "category"); SF.SearchComplete.addDataItem("Chests & Drawers", "category"); SF.SearchComplete.addDataItem("Chopping Boards", "category"); SF.SearchComplete.addDataItem("Climarelle", "brand"); SF.SearchComplete.addDataItem("Clothing & Footwear", "category"); SF.SearchComplete.addDataItem("Collins", "brand"); SF.SearchComplete.addDataItem("Contemporary", "category"); SF.SearchComplete.addDataItem("Contemporary", "category"); SF.SearchComplete.addDataItem("Contemporary", "category"); SF.SearchComplete.addDataItem("Contemporary", "category"); SF.SearchComplete.addDataItem("Cookware", "category"); SF.SearchComplete.addDataItem("Coolmax", "brand"); SF.SearchComplete.addDataItem("Coordinates", "category"); SF.SearchComplete.addDataItem("Cuisinart", "brand"); SF.SearchComplete.addDataItem("Culinare", "brand"); SF.SearchComplete.addDataItem("Cupboards & Cabinets", "category"); SF.SearchComplete.addDataItem("Cups & Mugs", "category"); SF.SearchComplete.addDataItem("Curtains", "category"); SF.SearchComplete.addDataItem("Curtains", "category"); SF.SearchComplete.addDataItem("Cutlery", "category"); SF.SearchComplete.addDataItem("Cutlery", "category"); SF.SearchComplete.addDataItem("DKNY", "brand"); SF.SearchComplete.addDataItem("Daewoo", "brand"); SF.SearchComplete.addDataItem("Dates H", "category"); SF.SearchComplete.addDataItem("Decorative", "category"); SF.SearchComplete.addDataItem("DefectRetest", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001-Style001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001-Sub002", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001-Sub003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat001-Trend001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Contemporary", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Contemporary-Diesel", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Contemporary-G-start", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Contemporary-Sixty", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Contemporary-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Designer", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Designer-Boss", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Designer-Burberry", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Designer-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Street", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Street-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Street-Topman", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Street-Topshop", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Style001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Sub002", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Sub003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Super-Burberry", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Super-Prada", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Superbrand", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Superbrand-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat002-Trend001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Contemporary", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Contemporary-Diesel", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Contemporary-G-start", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Contemporary-Sixty", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Contemporary-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Designer", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Designer-Boss", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Designer-Burberry", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Designer-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Street", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Street-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Street-Topman", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Street-Topshop", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Style001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Sub002", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Sub003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Sub003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Sub003", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Super-Burberry", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Super-Prada", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Superbrand", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Superbrand-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Cat003-Trend001", "category"); SF.SearchComplete.addDataItem("Dept001-Street-Sub001", "category"); SF.SearchComplete.addDataItem("Dept001-Street-Topman", "category"); SF.SearchComplete.addDataItem("Dept001-Street-Topshop", "category"); SF.SearchComplete.addDataItem("Designer", "category"); SF.SearchComplete.addDataItem("Designer", "category"); SF.SearchComplete.addDataItem("Designer", "category"); SF.SearchComplete.addDataItem("Designer sunglasses", "category"); SF.SearchComplete.addDataItem("Diesel", "brand"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Diesel", "category"); SF.SearchComplete.addDataItem("Dinnerware", "category"); SF.SearchComplete.addDataItem("Dorma", "brand"); SF.SearchComplete.addDataItem("Drainers", "category"); SF.SearchComplete.addDataItem("Dualit", "brand"); SF.SearchComplete.addDataItem("Dulton", "brand"); SF.SearchComplete.addDataItem("Duracell", "brand"); SF.SearchComplete.addDataItem("Duvet Sets", "category"); SF.SearchComplete.addDataItem("Duvets & Pillows", "category"); SF.SearchComplete.addDataItem("EGC", "category"); SF.SearchComplete.addDataItem("ELLE", "brand"); SF.SearchComplete.addDataItem("ERES", "brand"); SF.SearchComplete.addDataItem("Early''s of Witney", "brand"); SF.SearchComplete.addDataItem("Electrical", "category"); SF.SearchComplete.addDataItem("Electrical", "category"); SF.SearchComplete.addDataItem("Elixir De Lingerie", "brand"); SF.SearchComplete.addDataItem("Emile Henry", "brand"); SF.SearchComplete.addDataItem("Entertaining", "category"); SF.SearchComplete.addDataItem("Euroflex", "brand"); SF.SearchComplete.addDataItem("FAYREFORM", "brand"); SF.SearchComplete.addDataItem("Fixtures & Fittings", "category"); SF.SearchComplete.addDataItem("Food Storage", "category"); SF.SearchComplete.addDataItem("Fryers", "category"); SF.SearchComplete.addDataItem("Furniture", "category"); SF.SearchComplete.addDataItem("G-star", "brand"); SF.SearchComplete.addDataItem("Gadgets", "category"); SF.SearchComplete.addDataItem("Gaggia", "brand"); SF.SearchComplete.addDataItem("Glassware", "category"); SF.SearchComplete.addDataItem("Gourmet Express", "brand"); SF.SearchComplete.addDataItem("Gucci", "brand"); SF.SearchComplete.addDataItem("HANRO", "brand"); SF.SearchComplete.addDataItem("Health & Fitness", "category"); SF.SearchComplete.addDataItem("Heating & Lighting", "category"); SF.SearchComplete.addDataItem("Heating & Lighting", "category"); SF.SearchComplete.addDataItem("Hepa", "brand"); SF.SearchComplete.addDataItem("Hinari", "brand"); SF.SearchComplete.addDataItem("Hiram Wild", "brand"); SF.SearchComplete.addDataItem("Home & Leisure", "category"); SF.SearchComplete.addDataItem("Hygiene Plus", "brand"); SF.SearchComplete.addDataItem("Ijoy", "brand"); SF.SearchComplete.addDataItem("In the press H", "category"); SF.SearchComplete.addDataItem("Inspire me H", "category"); SF.SearchComplete.addDataItem("JUICY", "brand"); SF.SearchComplete.addDataItem("Jackaroo", "brand"); SF.SearchComplete.addDataItem("KIKI DE MONTPARNASSE", "brand"); SF.SearchComplete.addDataItem("Kettles", "category"); SF.SearchComplete.addDataItem("Kids", "category"); SF.SearchComplete.addDataItem("Kitchen & Dnning", "category"); SF.SearchComplete.addDataItem("KitchenAid", "brand"); SF.SearchComplete.addDataItem("Knives", "category"); SF.SearchComplete.addDataItem("L?Econome", "brand"); SF.SearchComplete.addDataItem("LEJABY", "brand"); SF.SearchComplete.addDataItem("LaFuma", "brand"); SF.SearchComplete.addDataItem("Laguiole", "brand"); SF.SearchComplete.addDataItem("Location H", "category"); SF.SearchComplete.addDataItem("London1", "category"); SF.SearchComplete.addDataItem("MILLY", "brand"); SF.SearchComplete.addDataItem("MISSONI", "brand"); SF.SearchComplete.addDataItem("Magi-Mat", "brand"); SF.SearchComplete.addDataItem("Magimix", "brand"); SF.SearchComplete.addDataItem("Mario Batali", "brand"); SF.SearchComplete.addDataItem("Maytag", "brand"); SF.SearchComplete.addDataItem("Media H", "category"); SF.SearchComplete.addDataItem("Mensa", "brand"); SF.SearchComplete.addDataItem("Menswear", "category"); SF.SearchComplete.addDataItem("Microwave", "category"); SF.SearchComplete.addDataItem("Microwaves", "category"); SF.SearchComplete.addDataItem("Mirrors", "category"); SF.SearchComplete.addDataItem("Mirrors", "category"); SF.SearchComplete.addDataItem("Mirrors", "category"); SF.SearchComplete.addDataItem("Mixers & Processors", "category"); SF.SearchComplete.addDataItem("Modern Classics", "category"); SF.SearchComplete.addDataItem("Modern Classics", "brand"); SF.SearchComplete.addDataItem("Modern Classics", "category"); SF.SearchComplete.addDataItem("Napkins", "category"); SF.SearchComplete.addDataItem("Nogent", "brand"); SF.SearchComplete.addDataItem("Novacook", "brand"); SF.SearchComplete.addDataItem("Onya", "brand"); SF.SearchComplete.addDataItem("Our windows H", "category"); SF.SearchComplete.addDataItem("Outdoor Accessories", "category"); SF.SearchComplete.addDataItem("Ovens/Grills", "category"); SF.SearchComplete.addDataItem("Ovenware", "category"); SF.SearchComplete.addDataItem("Oxford street H", "category"); SF.SearchComplete.addDataItem("PASSIONATA", "brand"); SF.SearchComplete.addDataItem("PAUL SMITH", "brand"); SF.SearchComplete.addDataItem("POLO RALPH LAUREN", "brand"); SF.SearchComplete.addDataItem("PRINCESSE TAM TAM", "brand"); SF.SearchComplete.addDataItem("Pans", "category"); SF.SearchComplete.addDataItem("Pasta Express", "brand"); SF.SearchComplete.addDataItem("Place Settings", "category"); SF.SearchComplete.addDataItem("Placemats & Coasters", "category"); SF.SearchComplete.addDataItem("Practical", "category"); SF.SearchComplete.addDataItem("Prada", "brand"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Prada", "category"); SF.SearchComplete.addDataItem("Praktica", "brand"); SF.SearchComplete.addDataItem("Prestige", "brand"); SF.SearchComplete.addDataItem("Princess", "brand"); SF.SearchComplete.addDataItem("Pringle", "brand"); SF.SearchComplete.addDataItem("RALPH LAUREN ACCESSORIES", "brand"); SF.SearchComplete.addDataItem("RALPH LAUREN PURPLE LABEL", "brand"); SF.SearchComplete.addDataItem("RRL", "brand"); SF.SearchComplete.addDataItem("Ready Steady Cook", "brand"); SF.SearchComplete.addDataItem("Remington", "brand"); SF.SearchComplete.addDataItem("Royal Doulton", "brand"); SF.SearchComplete.addDataItem("Royal Worcester", "brand"); SF.SearchComplete.addDataItem("Rugs & Runners", "category"); SF.SearchComplete.addDataItem("SKK", "brand"); SF.SearchComplete.addDataItem("STELLA McCARTNEY", "brand"); SF.SearchComplete.addDataItem("Sabatier", "brand"); SF.SearchComplete.addDataItem("Salmon", "category"); SF.SearchComplete.addDataItem("Seat Pads", "category"); SF.SearchComplete.addDataItem("Seen at selfridges", "category"); SF.SearchComplete.addDataItem("Seiko", "brand"); SF.SearchComplete.addDataItem("Selfridges style", "category"); SF.SearchComplete.addDataItem("Selfridges style", "category"); SF.SearchComplete.addDataItem("Sennheiser", "brand"); SF.SearchComplete.addDataItem("Serveware", "category"); SF.SearchComplete.addDataItem("Services", "category"); SF.SearchComplete.addDataItem("Services", "category"); SF.SearchComplete.addDataItem("Services", "category"); SF.SearchComplete.addDataItem("Services", "category"); SF.SearchComplete.addDataItem("Services", "category"); SF.SearchComplete.addDataItem("Severin", "brand"); SF.SearchComplete.addDataItem("Sheets", "category"); SF.SearchComplete.addDataItem("Shelving & Drawers", "category"); SF.SearchComplete.addDataItem("Sideboards", "category"); SF.SearchComplete.addDataItem("Sixty", "brand"); SF.SearchComplete.addDataItem("Sizty", "brand"); SF.SearchComplete.addDataItem("Skagen", "brand"); SF.SearchComplete.addDataItem("Spode", "brand"); SF.SearchComplete.addDataItem("Storage", "category"); SF.SearchComplete.addDataItem("Storage", "category"); SF.SearchComplete.addDataItem("Storage", "category"); SF.SearchComplete.addDataItem("Street", "category"); SF.SearchComplete.addDataItem("Street", "category"); SF.SearchComplete.addDataItem("Street", "category"); SF.SearchComplete.addDataItem("Street", "category"); SF.SearchComplete.addDataItem("Style", "category"); SF.SearchComplete.addDataItem("Style", "category"); SF.SearchComplete.addDataItem("Style", "category"); SF.SearchComplete.addDataItem("Style stories H", "category"); SF.SearchComplete.addDataItem("SubCategory", "category"); SF.SearchComplete.addDataItem("Super Brand", "category"); SF.SearchComplete.addDataItem("SuperBrands", "category"); SF.SearchComplete.addDataItem("Swan", "brand"); SF.SearchComplete.addDataItem("Tablecloths", "category"); SF.SearchComplete.addDataItem("Tables & Chairs", "category"); SF.SearchComplete.addDataItem("Tables & Chairs", "category"); SF.SearchComplete.addDataItem("Tableware", "category"); SF.SearchComplete.addDataItem("Tea & Coffee", "category"); SF.SearchComplete.addDataItem("Tea Cosies", "category"); SF.SearchComplete.addDataItem("Test001", "category"); SF.SearchComplete.addDataItem("Test001", "category"); SF.SearchComplete.addDataItem("Test002", "category"); SF.SearchComplete.addDataItem("Textiles", "category"); SF.SearchComplete.addDataItem("Toasters", "category"); SF.SearchComplete.addDataItem("Tools", "category"); SF.SearchComplete.addDataItem("Tools", "category"); SF.SearchComplete.addDataItem("Topman", "brand"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Topman", "category"); SF.SearchComplete.addDataItem("Toppers & Protectors", "category"); SF.SearchComplete.addDataItem("Topshop", "brand"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Topshop", "category"); SF.SearchComplete.addDataItem("Towel Rails", "category"); SF.SearchComplete.addDataItem("Towels", "category"); SF.SearchComplete.addDataItem("Trafford", "category"); SF.SearchComplete.addDataItem("Travelon", "brand"); SF.SearchComplete.addDataItem("Trend", "category"); SF.SearchComplete.addDataItem("Trend", "category"); SF.SearchComplete.addDataItem("Trend", "category"); SF.SearchComplete.addDataItem("Trolleys & Cabinets", "category"); SF.SearchComplete.addDataItem("Turtle Mat", "brand"); SF.SearchComplete.addDataItem("Utensils", "category"); SF.SearchComplete.addDataItem("Victorinox", "brand"); SF.SearchComplete.addDataItem("Visions Cookware", "brand"); SF.SearchComplete.addDataItem("Wardrobes", "category"); SF.SearchComplete.addDataItem("Waste Bins", "category"); SF.SearchComplete.addDataItem("What's happening", "category"); SF.SearchComplete.addDataItem("What's on 1", "category"); SF.SearchComplete.addDataItem("Whats on", "category"); SF.SearchComplete.addDataItem("Whats on", "category"); SF.SearchComplete.addDataItem("Whats on", "category"); SF.SearchComplete.addDataItem("Whats on", "category"); SF.SearchComplete.addDataItem("Whats on", "category"); SF.SearchComplete.addDataItem("William Morris", "brand"); SF.SearchComplete.addDataItem("Wine Storage", "category"); SF.SearchComplete.addDataItem("Womenswear", "category"); SF.SearchComplete.addDataItem("Zyliss", "brand"); SF.SearchComplete.addDataItem("brand1", "brand"); SF.SearchComplete.addDataItem("test1", "category"); 





		
		
		
		