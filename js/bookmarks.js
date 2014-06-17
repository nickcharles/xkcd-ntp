chrome.bookmarks.getChildren('1', function (results)
	{
		var bookmarkContainer = document.getElementById("bookmarkContainer");
		var bookmarkList = document.createElement("ul");
		bookmarkContainer.appendChild(bookmarkList);

		for (i = 0; i < results.length; ++i) {
			if (results[i].url.indexOf("chrome://") != -1) {
				continue;
			}
			var bookmark = document.createElement("li");
			var link = document.createElement("a");
			link.innerHTML = results[i].title;
			link.href = results[i].url;
			
			bookmark.appendChild(link);
			bookmarkList.appendChild(bookmark);
			console.log(results[i]);
		}
	});