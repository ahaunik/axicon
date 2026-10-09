"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
}

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "Welcome to AXICON Technical Assistant. I am here to assist with service inquiries and qualification. To begin, please provide details regarding your project scope, facility location, required inspection standards, and estimated timeline.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0); // 0: intro, 1: location, 2: scope, 3: standards, 4: timeline, 5: summary, 6: human-handover
  const [leadData, setLeadData] = useState({
    location: "",
    scope: "",
    standards: "",
    timeline: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHumanHandover, setIsHumanHandover] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);

    // Qualification flow logic
    let responseText = "";
    let updatedData = { ...leadData };
    let nextStep = step;

    switch (step) {
      case 0:
        updatedData.location = input.trim();
        responseText =
          `Acknowledged. Facility location noted: ${updatedData.location}. Next, please describe the Scope of Work (e.g., equipment inspection, vendor assessment, QA/QC audit).`;
        nextStep = 1;
        break;
      case 1:
        updatedData.scope = input.trim();
        responseText =
          `Scope recorded: ${updatedData.scope}. Which applicable standards are required (e.g., ISO 9001:2015, ASME, API)?`;
        nextStep = 2;
        break;
      case 2:
        updatedData.standards = input.trim();
        responseText =
          `Standards noted: ${updatedData.standards}. Finally, please provide the estimated timeline and urgency of the project.`;
        nextStep = 3;
        break;
      case 3:
        updatedData.timeline = input.trim();
        responseText = `Timeline noted: ${updatedData.timeline}. Compiling your details for review...`;
        nextStep = 4;
        break;
      default:
        responseText =
          "Thank you for providing the project details. Our team will review your request and prepare a formal proposal or assign an Inspection Coordinator.";
        nextStep = 5;
    }

    setLeadData(updatedData);
    setStep(nextStep);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: responseText,
          timestamp: new Date(),
        },
      ]);
    }, 500);
  };

  const handleSubmitLead = async () => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("location", leadData.location || "");
      formData.append("scope", leadData.scope || "");
      formData.append("standards", leadData.standards || "");
      formData.append("timeline", leadData.timeline || "");

      // Append files if any
      uploadedFiles.forEach((file) => {
        // We store a reference here; actual File object would be in a real upload scenario
        // For this demo, we just note the filenames
        formData.append("uploadedFiles", file.name);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "73050742-b448-4083-817d-34b72446ee6b",
          subject: "New Axicon Assistant Lead",
          location: leadData.location,
          scope: leadData.scope,
          standards: leadData.standards,
          timeline: leadData.timeline,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.message || "Submission failed");
      }

      const leadId = data?.message ? undefined : undefined;

      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: `Lead submitted successfully. A Technical Manager will review your file and follow up.`,
          timestamp: new Date(),
        },
      ]);
      setStep(5);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: `Error submitting lead: ${errorMessage}. Please try again or contact our team directly.`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newFiles = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = ""; // Reset input
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHumanHandover = () => {
    setIsHumanHandover(true);
    setStep(6);
    setMessages((prev) => [
      ...prev,
      {
        role: "system",
        content: `Manual handover triggered. Stopping automated flow. Notifying human representative. Please wait...`,
        timestamp: new Date(),
      },
    ]);
    // In a full implementation, this would trigger a notification
    // to the assigned human team member via WebSocket, email, etc.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `A human representative has been notified and will be with you shortly. Your conversation transcript has been saved for their review.`,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans antialiased">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
        aria-label="Open AXICON Technical Assistant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[400px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                AXICON Technical Assistant
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Executive Virtual Representative
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : msg.role === "system"
                      ? "bg-slate-100 text-slate-800 rounded-bl-sm border border-slate-200"
                      : "bg-white text-slate-800 rounded-bl-sm border border-slate-200"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  step === 5
                    ? "Type a message to continue..."
                    : "Type your details here..."
                }
                disabled={isHumanHandover}
                className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isHumanHandover}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-colors shadow-sm"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>

            {/* File Upload */}
            <div className="mt-3 flex items-center gap-2">
              <label
                className="flex-1 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-colors text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline mr-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                Upload SOW/RFQ
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isHumanHandover}
                />
              </label>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="mt-2 space-y-1">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs"
                  >
                    <span className="text-slate-700 truncate flex-1">
                      {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                    <button
                      onClick={() => removeFile(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                      aria-label="Remove file"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Qualification Progress */}
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Progress:</span>
              <div className="flex gap-1 flex-1">
                {["Location", "Scope", "Standards", "Timeline", "Summary"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                        i <= step ? "bg-blue-600" : "bg-slate-200"
                      }`}
                      title={label}
                    />
                  )
                )}
              </div>
            </div>

            {/* Submit Button for Summary */}
            {step >= 4 && (
              <div className="mt-3 space-y-2">
                <button
                  onClick={handleSubmitLead}
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white text-sm font-medium py-2.5 rounded-full transition-colors shadow-md"
                >
                  {isSubmitting ? "Submitting..." : "Compile Lead Summary & Submit"}
                </button>
                <button
                  onClick={handleHumanHandover}
                  className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium py-2 rounded-full transition-colors border border-blue-200"
                >
                  Talk to a Human
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
