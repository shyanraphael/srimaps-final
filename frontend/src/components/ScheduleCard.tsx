import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';
import { ScheduleItem } from '../utils/mockData';
interface ScheduleCardProps {
  schedule: ScheduleItem;
  index: number;
}
export function ScheduleCard({ schedule, index }: ScheduleCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: index * 0.05
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"></motion.div>
  );
}

