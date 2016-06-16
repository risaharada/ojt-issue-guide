var tabId = 0;
chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    tabId = tabs[0].id
});
$(window).load(chrome.tabs.reload())
$("#bug").on("click", function () {
    var body = "# 事象\n\n# 環境\n\n# 原因\n\n# 対応\n\n# Close条件\n\nbug fixがマージされる"
    chrome.tabs.sendMessage(
        tabId,
        {
            body: body
        },
        function(response) {}
    )
});