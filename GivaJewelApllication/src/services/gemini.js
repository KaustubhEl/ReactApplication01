import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure you have VITE_GEMINI_API_KEY in your .env file
const API_KEY = 'AIzaSyCwfdX_NGXG0t_zBbzoq9RpMaF5CIMJPqw';
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateProductInsights = async (productName, price) => {
  if (!API_KEY) {
    console.error("Gemini API Key is missing.");
    return null;
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Act as a luxury jewelry shopping assistant. 
      Analyze this product: "${productName}" priced at ${price}.
      
      Provide a response in strict JSON format with exactly these two keys:
      1. "summary": A 2-sentence elegant description highlighting craftsmanship and style.
      2. "giftingIdea": A suggestion on who this would be a perfect gift for and for what occasion (e.g., anniversary, wedding).
      
      Do not include markdown formatting (like \`\`\`json). Just the raw JSON object.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up markdown if Gemini adds it despite instructions
    const cleanText = text.replace(/```json|```/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini Interaction Failed:", error);
    return {
      summary: "Experience the elegance of this fine jewelry piece.",
      giftingIdea: "A timeless gift for someone special."
    };
  }
};