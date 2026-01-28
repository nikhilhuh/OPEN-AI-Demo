import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chat } from "../services/api/apiCalls/chat";

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [text]);

  // Parse text to handle bold formatting (**text**) and line breaks
  const parseText = (str) => {
    const parts = str.split(/(\\*\\*.*?\\*\\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i}>{part.slice(2, -2)}</strong>
        );
      }
      // Split by newlines and map to appropriate elements
      return part.split("\n").map((line, j) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < part.split("\n").length - 1 && <br />}
        </span>
      ));
    });
  };

  return <span className="whitespace-pre-wrap">{parseText(displayedText)}</span>;
};

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const data = await chat(userMessage.content);
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
    <div className="h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-[#0d0d0d] py-4 z-10 border-b border-white/5 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center">ASK AI</h1>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto pt-20 pb-32 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-2xl text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#2a2a2a] text-white px-4 py-3 rounded-lg"
                      : "text-white"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <TypingAnimation text={msg.content} />
                  ) : (
                    msg.content
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="text-base text-white">
                <motion.span
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ●
                </motion.span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d0d] to-transparent py-6 z-10">
        <div className="max-w-3xl mx-auto px-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Message AI..."
            className="flex-1 px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none border border-[#3a3a3a] focus:border-[#555555] placeholder-[#888888] transition"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-3 rounded-xl bg-[#10a37f] text-white font-medium hover:opacity-80 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
