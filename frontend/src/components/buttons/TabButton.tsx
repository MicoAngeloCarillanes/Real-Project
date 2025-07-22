interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export default function TabButton({
    label,
    isActive,
    onClick
}: TabButtonProps) {

    return (
        <li 
            className={`bg-[#F6F4FB] cursor-pointer font-bold py-[1.125rem] px-[1.75rem] mb-[10px] overflow-hidden relative rounded-[0.625rem] text-[1.25rem] text-[#052554] shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${isActive ? '!bg-[#D4D9EA]' : ''}`}
            onClick={onClick}
        >
            {isActive && (
                <div className="absolute bottom-[-10px] bg-[#c7c9df] h-[7rem] origin-bottom-right right-[-5px] rounded-full w-[8rem] scale-[0.5] [clip-path:ellipse(60%_80%_at_70%_100%)]"></div>
            )}
            {label}
        </li>
    );
}