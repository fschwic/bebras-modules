/*
showdownConvert : utilise Showdown pour convertir du markdown en HTML.

Utilisation :
    Mettre un <div class="markdown"> avec le contenu markdown.
    Au chargement, ces div seront convertis en HTML.
    La version convertie est ajoutée dans un nouveau <div> avec la classe
    "markdown-translated", la version markdown est toujours présente mais non
    affichée.
*/

define(['showdown', 'jquery'], function (showdown) {
    var showdownConverter = new showdown.Converter({headerLevelStart: 3});
    $(".markdown").each(function(idx, elem) {
        var newDiv = $('<div></div>');
        newDiv.html(showdownConverter.makeHtml($(this).html()) + '</div>');
        newDiv.addClass("markdown-translated");
        newDiv.insertAfter($(this));
        $(this).hide();
    });
});
