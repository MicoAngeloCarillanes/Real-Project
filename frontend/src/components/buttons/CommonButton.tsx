export interface CommonButtonProps {
    // Button label
    buttonLabel?: string;
    // Button style
    buttonStyle?: 'white' | 'blue';
}

export default function CommonButton({
    buttonLabel,
    buttonStyle
}: CommonButtonProps) {

    return (
        <button
            className={`
                font-[400] leading-[100%] px-[20px] py-[10px] rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.35)] text-[12px]
                ${buttonStyle === 'white' ? 'bg-[#FFFFFF] text-[#052554]' : 'bg-[#0C60A1] text-[#FFFFFF]'}
            `}
        >
            {buttonLabel}
        </button>
    );
}