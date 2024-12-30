"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Downtown Store",
    address: "123 Main St, City, State 12345",
    phone: "(123) 456-7890",
    hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
  },
  {
    id: 2,
    name: "Suburban Mall",
    address: "456 Shopping Blvd, Town, State 67890",
    phone: "(234) 567-8901",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
  },
  {
    id: 3,
    name: "Tech Hub",
    address: "789 Innovation Ave, Metro, State 34567",
    phone: "(345) 678-9012",
    hours: "Mon-Fri: 8AM-8PM, Sat: 9AM-7PM, Sun: Closed",
  },
];

const Locations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Locations
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">{location.name}</h2>
            <div className="flex items-start mb-2">
              <MapPin className="w-5 h-5 text-primary-600 mr-2 mt-1" />
              <p>{location.address}</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 text-primary-600 mr-2" />
              <p>{location.phone}</p>
            </div>
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-primary-600 mr-2 mt-1" />
              <p>{location.hours}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
