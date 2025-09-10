import CommonBadge from '@components/badge/CommonBadge';
import TooltipCard from '@components/card/TooltipCard';
import { classMerge } from '@utils/css.util';
import { useEffect, useRef, useState } from 'react';

export interface IconSelectProps {
    height?: number;
    imageUrl?: string;
    isHeader?: boolean;
    pendingActCount?: string;
    selectOptions?: string[];
    width?: number;
    onIconClick?: VoidFunction;
}

export default function IconSelect({
    height,
    imageUrl,
    isHeader,
    pendingActCount,
    selectOptions,
    width,
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

    return (
        <i
            className={
                classMerge(
                    'hover:cursor-pointer relative',
                    isHeader && 'h-[20px] w-[20px] bg-[#0C60A1] flex items-center justify-center rounded-full'
                )
            }
            ref={selectOptions ? iconRef : undefined}
            onClick={onIconClick && onIconClick}
        >
            <span onClick={selectOptions ? handleToggle : undefined}>
                <img
                    height={height}
                    width={width}
                    src={imageUrl}
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
                <CommonBadge
                    count={pendingActCount}
                    size="xm"
                />
            )}
        </i>
    );
}