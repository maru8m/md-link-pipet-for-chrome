var contexts = ["page","selection","link","editable","image","video","audio"];

var item = chrome.contextMenus.create({"title": "こぴい","contexts": ["page"],
    "onclick": function(info) {
      var pageUrl;
      var pageTitle;

      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs){
        var tab = tabs[0];

        pageTitle = tab.title;
        pageUrl = tab.url;

        var str = "["+pageTitle+"]("+pageUrl+")";

        var textArea = document.createElement("textarea");
        document.body.appendChild(textArea);
        textArea.value = str;
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      });
    }
});
