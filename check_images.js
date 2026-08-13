import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function checkImage(filename) {
    try {
        const imagePath = "src/assets/images/" + filename;
        const imageData = fs.readFileSync(imagePath).toString('base64');
        const response = await ai.models.generateContent({
            model: 'gemini-flash-lite-latest',
            contents: [
                {
                    role: 'user',
                    parts: [
                        { text: "Does this image show exactly 4 people, with exactly 3 of them holding certificates, and the background is a white indoor wall? Answer exactly YES or NO." },
                        { inlineData: { mimeType: 'image/jpeg', data: imageData } }
                    ]
                }
            ]
        });
        console.log(filename + ": " + response.text);
    } catch (e) {
        console.error(filename, e.message);
    }
}

async function run() {
    const images = ['JJ-05.jpg', 'JJ-06.jpg', 'JJ-07.jpg', 'JJ-08.jpg', 'ppp-01.jpg'];
    for (const img of images) {
        await checkImage(img);
        await new Promise(r => setTimeout(r, 15000)); // sleep 15s
    }
}
run();
