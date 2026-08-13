import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
    try {
        const response = await ai.models.list();
        for await (const m of response) {
            if (m.name.includes("flash") || m.name.includes("pro") || m.name.includes("gemini")) console.log(m.name);
        }
    } catch (e) { console.error(e.message); }
}
run();
