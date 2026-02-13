
import { GoogleGenAI } from "@google/genai";

export async function getPetAdvice(question: string): Promise<string> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "AI service is currently unavailable.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert veterinarian and pet behaviorist at Yetkus Pet Store. 
      Answer this customer question with helpful, encouraging, and medically sound advice. 
      Keep it under 150 words. Question: ${question}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our support team.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is taking a nap. Please try again later or call our store!";
  }
}
