function render(file, argoObject) {
    var template = HtmlService.createTemplateFromFile(file);
    if (argoObject) {
        var keys = Object.keys(argoObject);

        keys.forEach(function(key) {
            template[key] = argoObject[key];
        });
    } //end if
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setTitle("Modelagem- Home")
        // .setFaviconUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paris_RER_D_icon.svg/51.2rem-Paris_RER_D_icon.svg.png')
}