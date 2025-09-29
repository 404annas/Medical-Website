import React, { useState } from "react";
import { User, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#4D273F] to-black flex items-center justify-center pt-28 pb-10 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4D273F] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#4D273F] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4D273F] rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-xl bg-transparent border border-[#4D273F] rounded-3xl p-4 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4D273F] to-[#E6B59E] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle size={16} />
              Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Ready to start something amazing together? Drop us a line or reach
              out directly at{" "}
              <a
                href="mailto:hello@prebuiltui.com"
                className="text-[#E6B59E] hover:text-[#ce8a6b] transition-colors underline decoration-[#E6B59E] hover:decoration-[#ce8a6b]"
              >
                hello@admin.com
              </a>
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2 text-sm uppercase tracking-wider"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#E6B59E] group-focus-within:text-[#E6B59E] transition-colors" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-2 text-sm sm:text-base bg-white/5 border border-[#4D273F] rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E6B59E] focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2 text-sm uppercase tracking-wider"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-[#E6B59E] group-focus-within:text-[#E6B59E] transition-colors" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-2 text-sm sm:text-base bg-white/5 border border-[#4D273F] rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E6B59E] focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2 text-sm uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-4 text-sm sm:text-base bg-white/5 border border-[#4D273F] rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E6B59E] focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                placeholder="Tell us about your project or ask any questions"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || isSubmitted}
              className="w-full bg-gradient-to-r from-[#4D273F] to-[#E6B59E] hover:from-[#E6B59E] hover:to-[#4D273F] text-white font-semibold py-2 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-center">
              <p className="text-green-300 font-medium text-sm sm:text-base">
                Thank you for reaching out! We'll get back to you soon.
              </p>
            </div>
          )}
        </div>

        {/* Floating elements */}
        {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-bounce delay-1000"></div> */}
      </div>
    </div>
  );
};

export default ContactPage;
