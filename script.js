console.log("ページがロードされました");

document.getElementById("navigate").addEventListener("click", () => {
	window.location.href = "/another-page.html";
});

window.addEventListener("pageshow", (event) => {
	const statusElement = document.getElementById("status");
	if (event.persisted) {
		console.log("bfcacheによって復元されました");
		statusElement.textContent = "Restored from bfcache!";
	} else {
		console.log("通常のページロード");
		statusElement.textContent = "Page Loaded";
	}
});

window.addEventListener("pagehide", (event) => {
	if (event.persisted) {
		console.log("bfcacheに追加されました");
	} else {
		console.log("キャッシュされませんでした");
	}
});
