chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "diba.html",
  });
});
