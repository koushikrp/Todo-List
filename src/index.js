let listItems = document.querySelectorAll(".dropmenu>li");
listItems.forEach((listItem) => {
	listItem.style.display = "none";
});
document.querySelectorAll("nav ul li").forEach((menu) => {
	menu.addEventListener("mouseenter", (e) => {
		e.target.querySelectorAll("li").forEach((listItem) => {
			listItem.style.display = "block";
		});
	});
	menu.addEventListener("mouseout", (e) => {
		e.target.querySelectorAll("li").forEach((listItem) => {
			listItem.style.display = "none";
		});
	});
});
