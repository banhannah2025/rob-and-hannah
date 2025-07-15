'use client';
import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, data]);
  };

  return (
    <div>
      <div className="border p-4 h-64 overflow-y-auto mb-4">
        {messages.map((m, idx) => (
          <p key={idx} className="mb-2">
            <strong>{m.role}:</strong> {m.content}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button className="px-4 py-2 bg-blue-500 text-white" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
