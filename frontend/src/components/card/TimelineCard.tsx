import { useState } from 'react';

interface TimelineCardProps {
    // Due date of a timeline item
    dueDate?: string;
    // Checks whether the parent container's content is overflowing
    isOverflowing?: boolean;
    // Current status of a timeline item
    status?: 'pending' | 'missed' | 'submitted';
    // Subject code and name of a timeline item
    subjectCodeName?: string;
    // Task name of a timeline item
    taskName?: string;
}

export default function TimelineCard({
    isOverflowing,
    status = 'pending',
    dueDate,
    subjectCodeName,
    taskName
}: TimelineCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div 
                className={`
                    hover:opacity-[0.8] hover:cursor-pointer px-[6px] py-[2px] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full
                    ${status === 'missed' ? 'bg-[#ffc5c8]' : status === 'submitted' ? 'bg-[#D4D9EA]' :  'bg-[#B6E7FE]'}
                `}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="font-[500] text-[12px] truncate w-full">{taskName}</div>
                <div 
                    className={`
                        flex justify-between text-[10px]
                        ${isOverflowing ? 'flex-col' : ''}
                    `}
                >
                    <span>{subjectCodeName}</span>
                    <span>{dueDate}</span>
                </div>
                {hovered && (
                    <div 
                        className={`
                            ${status === 'missed' ? 'bg-[#ffc5c8]' : status === 'submitted' ? 'bg-[#D4D9EA]' :  'bg-[#B6E7FE]'} 
                            absolute left-[-180px] px-[8px] py-[8px] rounded-[8px] text-[12px] top-[45px] w-[80%] z-[999]
                        `}
                    >
                        <span className="break-words font-[500] text-[12px]">{taskName}</span>
                        <div className="flex flex-col justify-between text-[10px]">
                            <span>{subjectCodeName}</span>
                            <span>{dueDate}</span>
                            <span>{status.charAt(0)
                                .toLocaleUpperCase() + status.slice(1)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
            
        </>
    );
}