"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

function Angel() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const photos = [
    { id: 1, url: "/1.jpg" },
    { id: 2, url: "/2.jpg" },
    { id: 3, url: "/3.jpg" },
    { id: 4, url: "/4.jpg" },
    { id: 5, url: "/5.jpg" },

    { id: 9, url: "/9.jpg" },
    { id: 10, url: "/10.jpg" },
    { id: 11, url: "/11.jpg" },
    { id: 12, url: "/12.jpg" },
    { id: 13, url: "/13.jpg" },
    { id: 14, url: "/14.jpg" },
  ];

  const timeline = [
    {
      date: "August 2024",
      title: "First Meeting",
      description:
        "We met at the crazy crunch Street. I knew there was something special about your smile.",
    },
    {
      date: "August 2024",
      title: "First Date",
      description:
        "Our first official date at the hungry hurry and ride to caba. We talked for hours about everything and nothing.",
    },
  ];

  const loveQuotes = [
    "Your laugh is my favorite sound in the world",
    "The way you care for everyone around you amazes me",
    "Your kindness makes every day brighter",
    "I love how you see beauty in the smallest things",
    "Your strength inspires me to be better",
    "The way you make everyone feel welcome and loved",
    "Your passion for life is contagious",
    "I love our quiet moments together",
    "Your hugs feel like home",
    "The way you believe in dreams and make them real",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const FloatingHearts = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200 opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              rotate: 0,
            }}
            animate={{
              y: -50,
              rotate: 360,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
          >
            <Heart size={20 + Math.random() * 15} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      <FloatingHearts />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {["Home", "Gallery", "Our Story", "Love Notes", "Letter"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-rose-700 hover:text-rose-900 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Music Controls */}
      <motion.div
        className="fixed top-20 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-rose-600 hover:text-rose-800 transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </motion.div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 pt-20"
      >
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-light text-rose-800 mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(244,63,94,0.3)",
                  "0 0 40px rgba(244,63,94,0.5)",
                  "0 0 20px rgba(244,63,94,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Angel
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-rose-600 font-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              My heart, my home, my everything
            </motion.p>
            <motion.div
              className="text-6xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💕
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-light text-rose-800 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Beautiful Moments
          </motion.h2>

          <div className="max-w-2xl mx-auto relative">
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={photos[currentPhoto].url}
                alt={"Our moments"}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-medium"></p>
              </div>
            </motion.div>

            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPhoto
                    ? "bg-rose-500 scale-125"
                    : "bg-rose-200 hover:bg-rose-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="our-story" className="py-20 bg-white/50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-light text-rose-800 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Love Story
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <p className="text-rose-500 font-medium mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-semibold text-rose-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 mx-4">
                  <motion.div
                    className="w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Notes */}
      <section id="love-notes" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-light text-rose-800 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Things I Love About You
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 text-center shadow-xl border border-pink-200"
              >
                <p className="text-xl md:text-2xl text-rose-800 font-light leading-relaxed">
                  "{loveQuotes[currentQuote]}"
                </p>
                <motion.div
                  className="text-3xl mt-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                >
                  💝
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Personal Letter */}
      <section
        id="letter"
        className="py-20 bg-gradient-to-br from-rose-100 to-pink-100 relative z-10"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-light text-rose-800 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Letter From My Heart
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-rose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                My Dearest Angel,
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every morning I wake up grateful that you're in my life. You've
                brought colors to my world that I never knew existed. Your
                laughter is the melody that plays in my heart, and your love is
                the light that guides me through each day.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I created this website because words alone couldn't capture how
                much you mean to me. Every photo here tells a story of us, every
                moment a treasure I hold dear. You've made me believe in fairy
                tales again, because loving you feels like living in one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Thank you for being my partner, my best friend, my safe haven.
                Thank you for choosing to love me back. I promise to cherish
                every moment we have together and create countless more memories
                that will fill our hearts with joy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Forever yours,
                <br />
                With all my love ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center relative z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart
            className="mx-auto text-rose-400 mb-4"
            size={32}
            fill="currentColor"
          />
        </motion.div>
        <p className="text-rose-600 font-light">Made with endless love 💕</p>{" "}
        <span className="text-rose-600 font-light pt-6">-Wendel</span>
      </footer>
    </div>
  );
}

export default Angel;
