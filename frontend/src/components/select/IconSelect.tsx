import TooltipCard from '@components/card/TooltipCard';
import { useState, useRef, useEffect } from 'react';

export interface IconSelectProps {
    height?: number;
    imageUrl?: string;
    selectOptions?: string[];
    width?: number;
    isHeader?: boolean;
    pendingActCount?: string;
    onIconClick?: VoidFunction;
}

export default function IconSelect({ 
    height,
    imageUrl,
    selectOptions,
    width,
    isHeader,
    pendingActCount,
    onIconClick
}: IconSelectProps) {
    const [toggleSelect, setToggleSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const iconRef = useRef<HTMLSpanElement>(null);

    // Handle click outside
    useEffect(() => {
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
    };

    function handleToggle() {
        setToggleSelect((prev) => !prev);
    }
    
    const testStyle = { height: height };

    return (
        <i 
            className={`
                hover:cursor-pointer relative
                ${isHeader ? 'h-[20px] w-[20px] bg-[#0C60A1] flex items-center justify-center rounded-full' : ''}
            `}
            ref={selectOptions ? iconRef : undefined}
            onClick={onIconClick && onIconClick}
        >
            <span onClick={selectOptions ? handleToggle : undefined}>
                
                <img
                    height={height}
                    width={width}
                    src={imageUrl}
                    style={ testStyle }
                />
            </span>
            {toggleSelect && selectOptions && (
                <TooltipCard 
                    options={selectOptions} 
                    onSelect={handleSelectOption}
                    selectedOption={selectedOption}
                />
            )}
            {pendingActCount && (
                <span className="absolute bg-[#BF0A12] flex font-[600] h-[12px] items-center justify-center right-[-4px] rounded-full text-[#FFFFFF] text-[8px] top-[-4px] w-[12px]">
                    {pendingActCount}
                </span>
            )}
        </i>
    );
}