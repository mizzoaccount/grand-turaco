'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamMemberCard({ name, role, image, delay = 0 }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-red-600">{role}</p>
      </div>
    </motion.div>
  );
}