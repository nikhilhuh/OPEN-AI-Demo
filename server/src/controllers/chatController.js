import { getOpenAIClient } from "../services/openaiClient.js";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // ✅ Get client lazily (safe with ESM + dotenv)
    const openai = getOpenAIClient();

    // ✅ Use modern OpenAI Responses API
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: "You are a helpful coding assistant."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_output_tokens: 300
    });

    res.json({
      reply: response.output_text
    });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "AI failed to respond" });
  }
};
