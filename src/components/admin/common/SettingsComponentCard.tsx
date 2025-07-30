'use client'

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SettingsComponentCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const SettingsComponentCard: React.FC<SettingsComponentCardProps> = ({
    children,
    className = "",
    title = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
        >
            {/* Card Header - Clickable on mobile */}
            <button
                className={`flex justify-between items-center w-full px-6 py-5 md:cursor-default`}
                onClick={() => {
                    if (window.innerWidth < 768) { // Only toggle on mobile
                        setIsOpen(!isOpen);
                    }
                }}
                aria-expanded={isOpen}
                aria-controls={`card-content-${title}`}
            >
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    {title}
                </h3>
                {/* Show chevron only on mobile */}
                <div className="md:hidden">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>

            {/* Card Body - Hidden on mobile when accordion is closed */}
            <div
                id={`card-content-${title}`}
                className={`p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6 ${isOpen ? 'block' : 'hidden md:block'}`}
            >
                <div className="space-y-6">{children}</div>
            </div>
        </div>
    );
};

export default SettingsComponentCard;