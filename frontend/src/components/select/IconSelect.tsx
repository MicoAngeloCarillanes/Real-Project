import TooltipCard from '@components/card/TooltipCard';
import { useState, useRef, useEffect } from 'react';

interface IconSelectProps {
    height?: number;
    imageUrl?: string;
    selectOptions: string[];
    width?: number;
}

export default function IconSelect({ 
    height,
    imageUrl,
    selectOptions,
    width
}: IconSelectProps) {
    const [toggleSelect, setToggleSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const iconRef = useRef<HTMLSpanElement>(null);

    // Handle click outside
    useEffect(() => {
        console.log('toggleSelect changed:', toggleSelect);
        const handleClickOutside = (event: MouseEvent) => {
            if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
                setToggleSelect(false);
            }
        };

        if (toggleSelect) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleSelect]);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        setToggleSelect((false));
        console.log('test');
    };

    return (
        <i 
            className="hover:cursor-pointer relative"
            ref={iconRef}
        >
            <span onClick={() => setToggleSelect((prev) => !prev)}>
                <img
                    height={height}
                    width={width}
                    src={imageUrl}
                />
            </span>
            {toggleSelect && (
                <TooltipCard 
                    options={selectOptions} 
                    onSelect={handleSelectOption}
                    selectedOption={selectedOption}
                />
            )}
        </i>
    );
}