import { classMerge } from '@utils/css.util';

interface TooltipCardProps {
    // Option list of the tool tip card
    options: string[];
    // Currently selectec option of the tool tip card
    selectedOption: string | null;
    // Callback trigger upon selecting an option of the tool tip card
    onSelect: (option: string) => void;
}

export default function TooltipCard({
    options,
    selectedOption,
    onSelect
}: TooltipCardProps) {

    return (
        <>
            <ul className="absolute bg-white flex flex-col font-[400] not-italic py-[4px] right-0 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#052554] text-[12px]">
                {options.map((option) => {
                    return (
                        <li
                            className={
                                classMerge(
                                    'px-[8px] py-[12px] text-[#080612] text-nowrap',
                                    selectedOption === option
                                        ? 'bg-[#C0C0C0]'
                                        : 'hover:bg-[#B6E7FE]'
                                )
                            }
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