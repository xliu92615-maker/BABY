const fs = require('fs');

async function check() {
    const images = ['AA-11.jpg', 'AA-12.jpg', 'AA-13.jpg', 'AA-15.jpg', 'AA-16.jpg', 'JJ-04.jpg', 'JJ-05.jpg', 'JJ-06.jpg', 'JJ-07.jpg', 'JJ-08.jpg', 'ppp-01.jpg'];
    
    // We can't easily call Gemini API without a key, let's see if GEMINI_API_KEY is in env
    console.log(process.env.GEMINI_API_KEY ? "Has key" : "No key");
}
check();
