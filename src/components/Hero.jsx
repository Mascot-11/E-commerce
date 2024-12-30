"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="border-2 border-white/50 rounded-full px-6 py-2 text-xl">
                Now Available!
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-medium leading-tight"
            >
              Profoundly
              <br />
              powerful.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-light"
            >
              iPhone 16 Pro
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl font-bold">SHIELD+</div>
                <div className="text-sm text-white/70">Worth - NPR 13,000</div>
              </div>
              <div className="text-lg mb-4">Get Complimentary</div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Extended Warranty</div>
                  <div className="text-white/70">(1 Year)</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-medium mb-1">
                    Front Screen Replacement
                  </div>
                  <div className="text-white/70">(1 Time)</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Back Glass Replacement</div>
                  <div className="text-white/70">(1 Time)</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/products/iphone-16-pro"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=800&width=800&text=iPhone+16+Pro"
              alt="iPhone 16 Pro"
              className="w-full max-w-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
