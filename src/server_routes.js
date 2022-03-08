function loadPartialHTML(partial) {
    const htmlSv = HtmlService.createTemplateFromFile(partial);
    return htmlSv.evaluate().getContent();

}