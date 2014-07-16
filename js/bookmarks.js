chrome.bookmarks.getChildren('1', function (results)
	{
		var bookmarkContainer = document.getElementById("bookmarkContainer");
		var bookmarkList = document.createElement("ul");
		bookmarkContainer.appendChild(bookmarkList);

		printBookmarks(results, bookmarkList);
	});

function printBookmarks(bookmarkArray, bookmarkList)
	{
		for (i = 0; i < bookmarkArray.length; ++i) {
			if (bookmarkArray[i].url === undefined) {
				chrome.bookmarks.getChildren(bookmarkArray[i].id, function (results)
					{
						printBookmarks(results, bookmarkList);
					});
			}
			else if (bookmarkArray[i].url.indexOf("chrome://") == 0) {
				continue;
			}
			else {
				var bookmark = document.createElement("li");
				var link = document.createElement("a");
				link.innerHTML = bookmarkArray[i].title;
				link.href = bookmarkArray[i].url;
				
				bookmark.appendChild(link);
				bookmarkList.appendChild(bookmark);
			}
		}
	}