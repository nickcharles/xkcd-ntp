chrome.bookmarks.getTree(function (results)
{
	var bookmarkContainer = document.getElementById("bookmarkContainer");
	var bookmarkList = document.createElement("ul");
	bookmarkContainer.appendChild(bookmarkList);

	printBookmarks(results, bookmarkList);
});

function folderTrav(item, bookmarkList)
{
	chrome.bookmarks.getChildren(item.id, function (results) {
		printBookmarks(results, bookmarkList);
	});
}

function printBookmarks(bookmarkArray, bookmarkList)
{
	for (i = 0; i < bookmarkArray.length; ++i) {
		var bookmark = document.createElement("li");
		var link = document.createElement("a");
		// If encountered element is a folder, go inside
		if (bookmarkArray[i].url === undefined) {
			folderTrav(bookmarkArray[i], bookmarkList);
		}
		// If it is a bookmark to Chrome, move on
		else if (bookmarkArray[i].url.indexOf("chrome://") == 0) {
			continue;
		}
		// Else print
		else {
			link.innerHTML = bookmarkArray[i].title;
			link.href = bookmarkArray[i].url;
			bookmark.appendChild(link);
			bookmarkList.appendChild(bookmark);
		}
	}
}