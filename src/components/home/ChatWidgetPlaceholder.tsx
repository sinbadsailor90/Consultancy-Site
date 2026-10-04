"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ChatWidgetPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "Hello! I am your Polaris Green AI Advisor. How can I help you today? Ask me about visas, universities, or internship programs!",
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputVal("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thank you for your question about "${userText}". For tailored guidance, please fill out our consultation form above or reach out to our specialist advisors directly!`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-xs">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold">
                  <span>Polaris AI Assistant</span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
                    <Sparkles className="h-2.5 w-2.5" /> Beta
                  </span>
                </div>
                <div className="text-[11px] text-emerald-100/80">
                  Instant guidance for study, visa & careers
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-slate-50 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-emerald-600 text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => setInputVal("How do I apply for a student visa?")}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-colors"
            >
              Student Visas
            </button>
            <button
              onClick={() => setInputVal("Tell me about corporate training")}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-colors"
            >
              Corporate Training
            </button>
            <button
              onClick={() => setInputVal("When is the next education fair?")}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-colors"
            >
              Next Fair
            </button>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-5 py-3.5 shadow-xl shadow-slate-900/20 hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="h-5 w-5 text-emerald-400" />
        <span className="text-sm font-semibold">Ask Assistant</span>
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
      </button>
    </div>
  );
}
