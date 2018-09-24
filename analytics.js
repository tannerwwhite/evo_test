function getWordCount(e) {
    function getText(el) {
        var ret = "";
        var length = el.childNodes.length;
        for (var i = 0; i < length; i++) {
            var node = el.childNodes[i];
            if(node.nodeType != 8) {
                ret += node.nodeType != 1 ? node.nodeValue : getText(node);
            }
        }
        return ret;
    }

    return getText(e).split(/\s+/).length;
}

function getWordCountRange(e) {
    var groupingSize = 500;
    
    var wordCount = getWordCount(e);
    var lower = (wordCount - (wordCount % groupingSize));

    return lower + " - " + (lower + (groupingSize - 1));
}

ga('send', 'pageview', {
    'dimension1': getWordCount(document.body),
    'dimension2': getWordCountRange(document.body)
});