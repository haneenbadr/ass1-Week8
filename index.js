var quotes=['“Be yourself; everyone else is already taken.”― Oscar Wilde','“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”\n― Albert Einstein',
'“So many books, so little time.”\n―Frank Zappa','“A room without books is like a body without a soul.”\n ―Marcus Tullius Cicero','“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”\n―Bernard M. Baruch',
'“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”\n― Dr. Seuss','“You only live once, but if you do it right, once is enough.”\n― Mae West'
]
    
    function newQuote() { 
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById("qoutes").innerHTML=quotes[randomNumber];
    }


    newQuote(quotes);