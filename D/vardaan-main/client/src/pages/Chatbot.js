import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      setMessages(prev => [...prev, { sender: "bot", text: "Sorry, something went wrong." }]);
    }

    setInput("");
  };

  return (
    <div style={{
      backgroundColor: "#111",
      minHeight: "100vh",
      padding: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "500px",
        background: "#fff",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)"
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <img src="/logo.png" alt="Chatbot Logo" style={{ height: "60px" }} />
          <h2 style={{ marginTop: "0.5rem", color: "#B71C1C" }}>🩸 Blood Donation Chatbot</h2>
        </div>

        {/* Chat Box */}
        <div style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "1rem",
          height: "400px",
          overflowY: "auto",
          background: "#f9f9f9"
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              margin: "0.5rem 0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: msg.sender === "user" ? "#e1f5fe" : "#ffe0b2",
                padding: "0.6rem",
                borderRadius: "8px",
                maxWidth: "80%"
              }}>
                <span style={{ marginRight: "0.5rem" }}>
                  {msg.sender === "user" ? "🙋‍♀️" : "🤖"}
                </span>
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div style={{ marginTop: "1rem", display: "flex" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about blood donation..."
            style={{
              flexGrow: 1,
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginRight: "0.5rem"
            }}
          />
          <button onClick={handleSend} style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#B71C1C",
            color: "#fff",
            border: "none",
            borderRadius: "4px"
          }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;





