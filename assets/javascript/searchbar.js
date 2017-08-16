	var url = "https://anilist.co/api/auth/access_token";

      $("#search").on("click",function(event){
        window.location("clone-faves.html")  
        var search = $("#search-input").val();
      	event.preventDefault();
      	console.log(search);
	      
	      $.ajax({
	        method: "POST",
	        url: url,
	        data: {
	          grant_type    : "client_credentials",
	          client_id     :  "doliveira-ltvix",
	          client_secret :  "0xKw6JT9yVCuTU8D2Ff0hV6ecNMD"
	        }
	      }).done( function(response) {

	        var accessToken = response.access_token;
	        console.log(accessToken);

	        var url2 = "https://anilist.co/api/anime/search/"+search+"?access_token=" + accessToken;
	        $.ajax({
	          method: "GET",
	          url: url2
	        }).done( function(res) {
						for (var i = 0; i < res.length; i++) {
							var search1 = res[i];
							console.log(res[i])
							var searchDiv = $("<div>")
							var searchLink= $("<a>");

						 
            searchLink.attr("href","favorites.html");
						searchLink.text(search1.title_english);
            searchLink.attr("value",search1.title_english);
            localStorage.setItem("key",search1.title_english)
              
            searchDiv.append(searchLink);
            $("#search-result").append(searchDiv);

            $("#search").val("");
						}
	          
	          console.log(res);
	        });

	      });
  		});