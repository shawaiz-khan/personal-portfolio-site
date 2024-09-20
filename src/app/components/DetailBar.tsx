'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DetailBar: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);

    const details = [
        { number: '15+', label: 'CUSTOMERS' },
        { number: '20+', label: 'PROJECTS' },
        { number: '90%', label: 'SATISFACTION' },
        { number: '10+', label: 'FRAMEWORKS' },
        { number: '20+', label: 'MODULES' },
        { number: '15+', label: 'DEPLOYMENTS' },
    ];

    return (
        <article className='h-24 bg-secondary flex items-center overflow-hidden'>
            <motion.div
                initial={{ x: '100%' }}
                animate={isPaused ? { x: 0 } : { x: '-100%' }}
                transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                className='flex items-end mx-6 font-fira'
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {details.map((detail, index) => (
                    <div key={index} className='flex items-end mx-6 font-fira'>
                        <span className='text-3xl font-semibold text-highlight'>{detail.number}</span>
                        <span className='ml-2 text-xl font-normal'>{detail.label}</span>
                    </div>
                ))}
            </motion.div>
        </article>
    );
}

export default DetailBar;