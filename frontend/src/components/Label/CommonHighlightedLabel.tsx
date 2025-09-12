interface CommonHighlightedLabelProps {
    // Label
    label?: string;
    // Label Highlight width
    labelWidth?: string;
    // Label value
    value?: string;
}

export default function CommonHighlightedLabel({
    label,
    value
}: CommonHighlightedLabelProps) {
    return (
        <div className="border-[#0C60A1] border-[2px] flex items-center overflow-hidden rounded-[6px] text-[12px] w-full">
            <span className="bg-[#0C60A1] border-[#0C60A1] border-[2px] font-[700] leading-[100%] min-w-[25%] px-[12px] py-[8px] text-[#FFFFFF]">
                {label?.toLocaleUpperCase()}
            </span>
            <span className="bg-[#f7f7f7] flex-1 leading-[100%] px-[12px] py-[8px] text-[#080612]">
                {value}
            </span>
        </div>
    );
};