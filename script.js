// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: 'Nelson Mandela'
    }, 
     {
        quote: "The way to get started is to quit talking and begin doing.",
        person: 'Walt Disney'
    },
     {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: 'Steve Jobs'
    },
     {
        quote: "If life were predictable it would cease to be life, and be without flavor. ",
        person: 'Eleanor Roosevelt'
    },
     {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person: 'Mother Teresa'
    },
     {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        person: 'Robert Louis Stevenson'
    },
     {
        quote: "The journey of a thousand miles begins with one step.",
        person: 'Lao Tzu'
    },
     {
        quote: "Life is what happens when you\'re busy making other plans.",
        person: 'John Lennon'
    },
     {
        quote: "You must be the change you wish to see in the world.",
        person: 'Mahatma Gandhi'
    },
     {
        quote: "Get busy living or get busy dying.",
        person: 'Stephen King'
    },
     {
        quote: "A man is but what he knows.",
        person: 'Sir Francis Bacon'
    },
     {
        quote: "Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do.",
        person: 'Mark Twain'
    },
     {
        quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
        person: 'Harriet Tubman'
    },
     {
        quote: "The strongest man is the one who, when he gets angry and his face reddens and his hackles rise, is able to defeat his anger.",
        person: 'Prophet Muhammad'
    },
     {
        quote: "Nothing is impossible. The word itself says 'I\'m possible!'",
        person: 'Audrey Hepburn'
    },
];

btn.addEventListener('click', function()
{
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});