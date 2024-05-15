var quoteButton = document.getElementById('quoteButton')
var quoteParagraph = document.getElementById('quoteParagraph')
var quote;
var lastQuote;

function getRandom() {
    var quoteNumber = Math.floor(Math.random() * 6)
    while (lastQuote == quoteNumber) {
        var quoteNumber = Math.floor(Math.random() * 6)
    }
    lastQuote = quoteNumber
    return quoteNumber;
}
function getQuote() {
    var quoteNumber = getRandom()
    if (quoteNumber == 0) {
        quote = `“Be yourself; everyone else is already taken.”
        ― Oscar Wilde`
    }
    else if (quoteNumber == 1) {
        quote = `“So many books, so little time.”
        ― Frank Zappa`
    }
    else if (quoteNumber == 2) {
        quote = `“A room without books is like a body without a soul.”
        ― Marcus Tullius Cicero`
    }
    else if (quoteNumber == 3) {
        quote = `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
            ― Albert Einstein`
    }
    else if (quoteNumber == 4) {
        quote = `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
        ― Bernard M. Baruch`
    }
    else {
        quote = `“You only live once, but if you do it right, once is enough.”
        ― Mae West`
    }
    quoteParagraph.innerHTML = quote
}
quoteButton.onclick = getQuote