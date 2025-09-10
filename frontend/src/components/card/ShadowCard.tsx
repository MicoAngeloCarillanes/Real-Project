import { classMerge } from '@utils/css.util';

interface ShadowCardProps {
    // Main content of the card
    children?: React.ReactNode;
    // Checks whether the card's children is centered
    isCentered?: boolean;
    // Checks whether the card is large
    isLarge?: boolean;
    // Checks whether the background color is white or not
    white?: boolean;
}

export default function ShadowCard({
    children,
    isCentered,
    isLarge,
    white
}: ShadowCardProps) {

    return (
        <div
            className={
                classMerge(
                    'flex rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full',
                    white
                        ? 'bg-[#FFFFFF]'
                        : 'bg-[#F6F4FB]',
                    isLarge
                        ? 'min-h-[calc(100vh-120px)]'
                        : '',
                    isCentered
                        ? 'justify-center'
                        : ''
                )
            }
        >
            {children}
        </div>
    );
}