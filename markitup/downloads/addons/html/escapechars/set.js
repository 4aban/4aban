// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://localhost/markitup/
// ----------------------------------------------------------------------------
mySettings = {	
	markupSet:  [	
		{	name:'Encode Html special chars',
			className:"encodechars", 
			replaceWith:function(markItUp) { 
				var container = document.createElement('div');
				container.appendChild(document.createTextNode(markItUp.selection));
				return container.innerHTML; 
			}
		}
	]
}