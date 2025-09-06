import { useState } from 'react';

export interface DetailCardProps {
    // Current cardStatus of a timeline item
    cardStatus?: 'pending' | 'missed' | 'submitted';
    // Subject code and name of a timeline item
    cardDescription?: string;
    // Task name of a timeline item
    cardName?: string;
    // Due date of a timeline item
    dueDate?: string;
    // 
    isCourse?: boolean;
    // Checks whether the parent container's content is overflowing
    isOverflowing?: boolean;
}

export default function DetailCard({
    cardDescription,
    cardName,
    cardStatus,
    dueDate,
    isCourse,
    isOverflowing
}: DetailCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className={`
                    ${isCourse ? 'bg-transparent' : 'hover:opacity-[0.8] cursor-pointer px-[6px] py-[2px] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full'}
                    ${cardStatus === 'missed' ? 'bg-[#ffc5c8]' : cardStatus === 'submitted' ? 'bg-[#D4D9EA]' :  'bg-[#B6E7FE]'}
                `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div 
                className={`
                    font-[500] text-[12px] w-full
                    ${isCourse ? 'break-words' : 'truncate'}
                `}
            >
                {cardName}
            </div>
            <div 
                className={`
                        flex justify-between text-[10px]
                        ${isOverflowing ? 'flex-col' : ''}
                    `}
            >
                <span>{cardDescription}</span>
                <span>{dueDate}</span>
            </div>
            {!isCourse && hovered && (
                <div 
                    className={`
                        ${cardStatus === 'missed' ? 'bg-[#ffc5c8]' : cardStatus === 'submitted' ? 'bg-[#D4D9EA]' :  'bg-[#B6E7FE]'} 
                        absolute left-[-180px] px-[8px] py-[8px] rounded-[8px] text-[12px] top-[45px] w-[80%] z-[999]
                    `}
                >
                    <span className="break-words font-[500] text-[12px]">{cardName}</span>
                    <div className="flex flex-col justify-between text-[10px]">
                        <span>{cardDescription}</span>
                        <span>{dueDate}</span>
                        {cardStatus && (
                            <span>{cardStatus.charAt(0)
                                .toLocaleUpperCase() + cardStatus.slice(1)}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}