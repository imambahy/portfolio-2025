"use client";

export default function Contact() {
  return (
    <section className="space-y-12 animate-fade-in-up">
      <h3 className="text-3xl font-light text-green-400 mb-12 text-center">
        CONTACT
      </h3>

      <div className="max-w-2xl mx-auto animate-scale-in">
        <form className="space-y-6">
          <div>
            <input
              className="w-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-green-400 transition-all duration-300"
              placeholder="Your email"
              type="email"
              required
            />
          </div>
          <div>
            <textarea
              className="w-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-green-400 transition-all duration-300 resize-none"
              placeholder="Your message"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-black px-8 py-4 rounded-lg font-medium hover:bg-green-300 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={(e) => { e.preventDefault(); alert("Pesan terkirim! (dummy)"); }}
          >
            SEND MESSAGE
          </button>
        </form>

        <div className="flex justify-center gap-8 mt-12 stagger-children">
          <a 
            href="mailto:imambahyp@gmail.com" 
            className="text-white/80 hover:text-green-400 transition-all duration-300 hover:scale-110"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com/in/imambahyputra" 
            target="_blank" 
            className="text-white/80 hover:text-green-400 transition-all duration-300 hover:scale-110"
          >
            LinkedIn
          </a>
          <a 
            href="https://medium.com/@imambahyp" 
            target="_blank" 
            className="text-white/80 hover:text-green-400 transition-all duration-300 hover:scale-110"
          >
            Medium
          </a>
        </div>
      </div>
    </section>
  );
}