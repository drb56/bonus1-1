// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
//$(".flexsearch").append("<ul>");
(function() {
	// Magic!
	console.log('Keepin\'n it clean with an external script!');
	
			var data = $.getJSON("http://www.mattbowytz.com/simple_api.json",{data: "all"}, function( json ) {
  				console.log( json);
			});
			
			$(".flexsearch").keyup(function() {
				$("#dropdown").remove();
				var keys = JSON.parse(data.responseText);
				console.log(keys);
				var input = $(".flexsearch-input").val();
				var interestArray = keys.data.interests;
				var programmingArray = keys.data.programming;
				var prefixArray = [];
				
				for(var i=0; i<interestArray.length; i++)
					{
						var index = interestArray[i].toLowerCase().indexOf(input.toLowerCase());
						if(index === 0)
							{
								prefixArray.push(interestArray[i]);
							}
					}
				
				for(var i=0; i<programmingArray.length; i++)
					{
						var index = programmingArray[i].toLowerCase().indexOf(input.toLowerCase());
						if(index === 0)
							{
								prefixArray.push(programmingArray[i]);
							}
					}
				
				console.log(prefixArray);
				if(input == "")
				{
						$(".flexsearch").append("");
				}
				else
				{
					$(".flexsearch").append("<ul id='dropdown'></ul>");
					for(var i=0; i<prefixArray.length; i++)
						{
							$("#dropdown").append("<li><a href=//www.google.com/search?q=" + prefixArray[i].replace(" ", "+") + ">" + prefixArray[i] + "</a></li>");
						}
				}
 			});
	
		function prefixFunc(input, array){
			for(var i=0; i<input.length; i++)
				{
					if(input[i] != array[i])
						{
							return false;
						}
					else{
						return true;
					}
				}
			return false;
		}
	
			
			
})();
