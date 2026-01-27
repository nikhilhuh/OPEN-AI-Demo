import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chat } from "../services/api/apiCalls/chat";

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const data = chat(userMessage.content);
      const aiMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">AI Chat</h1>

        <div className="flex-1 overflow-y-auto space-y-3 p-4 border border-white/10 rounded-xl bg-white/5">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg max-w-[80%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-white text-black"
                    : "mr-auto bg-white/10"
                }`}
              >
                {msg.content}
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white/50"
            >
              AI is typing...
            </motion.div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 outline-none border border-white/10 focus:border-white"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-80 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
