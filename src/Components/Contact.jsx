import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        toast.success("Message Sent!", {
          description: "I'll get back to you as soon as possible.",
        });
        form.current.reset();
        setIsSending(false);
    }, (error) => {
        alert("Something went wrong. Please try again later.");
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="px-6 lg:px-32 py-32 bg-[#0b0b0b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#ff6b35]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ff6b35] font-mono tracking-[0.3em] text-xs mb-3"
          >
            04. WHAT'S NEXT?
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Get In <span className="text-gray-600 italic">Touch.</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#ff6b35]/50 transition-colors">
                <FiMail className="text-[#ff6b35] text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Email Me</h4>
                <p className="text-gray-500 mt-1 text-sm md:text-base">abunayeemriyad@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#ff6b35]/50 transition-colors">
                <FiMapPin className="text-[#ff6b35] text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Location</h4>
                <p className="text-gray-500 mt-1">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex gap-4">
              <motion.a href="https://github.com/nimostic" target="_blank" whileHover={{ y: -5 }} className="p-4 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35]/50 transition-all">
                <FiGithub />
              </motion.a>
              <motion.a href="https://linkedin.com/in/abunayeemriyad" target="_blank" whileHover={{ y: -5 }} className="p-4 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35]/50 transition-all">
                <FiLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                <input required name="from_name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#ff6b35]/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input required name="user_email" type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#ff6b35]/50 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea required name="message" rows="4" placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#ff6b35]/50 transition-all resize-none"></textarea>
            </div>

            <motion.button 
              disabled={isSending}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
              className={`w-full ${isSending ? 'bg-gray-600' : 'bg-[#ff6b35]'} text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,107,53,0.3)] transition-all`}
            >
              {isSending ? "Sending..." : "Send Message"} <FiSend />
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;