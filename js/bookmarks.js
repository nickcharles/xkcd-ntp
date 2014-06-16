chrome.bookmarks.getChildren('1', function (results)
	{
		var bookmarkContainer = document.getElementById("bookmarkContainer");
		var bookmarkList = document.createElement("ul");
		bookmarkContainer.appendChild(bookmarkList);

		for (i = 0; i < results.length-1; ++i) {
			var bookmark = document.createElement("li");
			var link = document.createElement("a");
			link.rel = "icon";
			link.innerHTML = results[i].title;
			link.href = results[i].url;
			
			bookmark.appendChild(link);
			bookmarkList.appendChild(bookmark);
			console.log(results[i]);
		}
	});