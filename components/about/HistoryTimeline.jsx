'use client';

import { motion } from 'framer-motion';
import { Cross, BookOpen, Users, Mic, Globe } from 'lucide-react';

const timelineEvents = [
  {
    year: "2010",
    title: "Ministry Founding",
    description: "Anne begins hosting prayer meetings in her home",
    icon: <Cross size={20} />
  },
  {
    year: "2012",
    title: "First Crusade",
    description: "Outdoor evangelistic event draws 500 people",
    icon: <Mic size={20} />
  },
  {
    year: "2015",
    title: "TV Ministry Launch",
    description: "Weekly program begins airing nationally",
    icon: <Globe size={20} />
  },
  {
    year: "2018",
    title: "International Outreach",
    description: "First missions trip to neighboring countries",
    icon: <Users size={20} />
  },
  {
    year: "2020",
    title: "Digital Expansion",
    description: "Online platforms reach global audience",
    icon: <BookOpen size={20} />
  },
  {
    year: "2023",
    title: "Current Reach",
    description: "Ministering to millions across 15 nations",
    icon: <Globe size={20} />
  }
];

export default function HistoryTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-red-200 transform -translate-x-1/2" />
      
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className={`absolute top-6 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white ${index % 2 === 0 ? 'left-1/2 ml-4' : 'right-1/2 mr-4'}`}>
              {event.icon}
            </div>
            
            {/* Timeline content */}
            <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              <div className="text-red-600 font-bold mb-2">{event.year}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}