interface CommonImageLabelProps {
    imageUrl: string;
    name: string;
}

export default function CommonImageLabel({
    imageUrl,
    name
}: CommonImageLabelProps) {

    return (
        <div className="flex items-center gap-[10px] text-white">
            <img 
                src={imageUrl}
                alt=""
                height={40}
                width={40}
            />
            <span className="overflow-hidden text-nowrap">{name}</span>
        </div>
    );
}