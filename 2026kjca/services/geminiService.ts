import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client safely
const getClient = () => {
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSlogan = async (): Promise<string> => {
  const ai = getClient();
  if (!ai) return "API Key Missing: Cannot generate slogan.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "THE국제직업전문학교 첨단점의 '바이브코딩(Vibe Coding)' 교육을 홍보하기 위한 짧고 강렬한 슬로건 1개를 한국어로 추천해줘. 부가 설명 없이 슬로건만 출력해.",
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple task
      }
    });
    return response.text || "AI 응답을 불러올 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 서비스 연결 중 오류가 발생했습니다.";
  }
};
