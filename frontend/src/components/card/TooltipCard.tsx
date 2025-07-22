interface TooltipCardProps {
    options: string[];
    selectedOption: string | null;
    onSelect: (option: string) => void;
}

export default function TooltipCard({
    options,
    selectedOption,
    onSelect
}: TooltipCardProps) {

    return (
        <>
            <ul 
                className="absolute bg-white flex flex-col py-2 right-0 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#052554] font-normal"
            >
                    
                {options.map((option) => {
                    return (
                        <li 
                            className={`px-3 py-4 text-[#080612] text-nowrap ${selectedOption === option ? 'bg-[#C0C0C0]' : 'hover:bg-[#B6E7FE]'}`}
                            key={option}
                            onClick={() => onSelect(option)}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}