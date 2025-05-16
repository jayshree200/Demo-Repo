const quotes = [
    {
      quote: "Push yourself, because no one else is going to do it for you.",
      author: "– Anonymous"
    },
    {
      quote: "Success doesn’t just find you. You have to go out and get it.",
      author: "– Unknown"
    },
    {
      quote: "Great things never come from comfort zones.",
      author: "– Motivational Speaker"
    },
    {
      quote: "Dream it. Wish it. Do it.",
      author: "– Anonymous"
    },
    {
      quote: "Don’t stop when you’re tired. Stop when you’re done.",
      author: "– Marilyn Monroe"
    }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = `"${quotes[randomIndex].quote}"`;
    document.getElementById("author").textContent = quotes[randomIndex].author;
  }
  