interface ShadowCardProps {
    // Main content of the card
    children?: React.ReactNode;
    // 
    isCentered?: boolean;
    // 
    isLarge?: boolean;
    // Checks whether contents are rendered vertically or horizontally
    isVertical?: boolean;
    // Checks whether the background color is white or not
    white?: boolean;
}

export default function ShadowCard({
    children,
    isCentered,
    isLarge,
    isVertical,
    white
}: ShadowCardProps) {

    return (
        <div 
            className={`
                    flex rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full 
                    ${white? 'bg-[#FFFFFF]' : 'bg-[#F6F4FB]'} 
                    ${isVertical ? 'flex-col' : ''}
                    ${isLarge ? 'min-h-[calc(100vh-120px)]' : ''}
                    ${isCentered ? 'justify-center' : ''}
                `}
        >
            {children}
        </div>
    );
}