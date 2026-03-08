import React from 'react';
import { motion } from 'framer-motion';
import {
    PackageIcon,
    CalendarIcon,
    ClockIcon,
    BusIcon,
    PhoneIcon
} from
    'lucide-react';
import { LostFoundItem } from '../utils/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translations';

interface LostFoundCardProps {
    item: LostFoundItem;
    type: 'lost' | 'found';
    index: number;
    onAction: (item: LostFoundItem) => void;
}
export function LostFoundCard({
    item,
    type,
    index,
    onAction
}: LostFoundCardProps) {
    const { language } = useLanguage();
    const isLost = type === 'lost';
    return ();
}