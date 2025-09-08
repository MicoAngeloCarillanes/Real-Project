import ShadowCard from '@components/card/ShadowCard';

interface CommonTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    // Text area title
    title?: string;
    // Text area description
    description?: string;
    // Text area height;
    height?: string | number;
}

export default function CommonTextArea({
    description,
    height,
    title,
    ...props
} : CommonTextAreaProps) {

    return(
        <ShadowCard white>
            <div
                className="flex flex-col gap-[8px] h-[100%] p-[8px] text-[#080612] w-full"
                style={{ height }}
            >
                {title && (
                    <p className="font-[600] leading-[100%] text-[12px]">{title}</p>
                )}
                {description && (
                    <p className="font-[400] leading-[100%] text-[12px]">{description}</p>
                )}
                <textarea
                    className="bg-[#EDEDF0] border p-[8px] placeholder-[#939393] resize-none rounded-[8px] text-[14px] w-full"
                    style={{ height }}
                    placeholder="Enter your text here..."
                    {...props}
                />
            </div>
        </ShadowCard>
    );
}