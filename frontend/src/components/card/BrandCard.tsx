import logo from '@assets/images/au-logo.svg';

interface BrandCardProps {
    // Checks whether brand card is small or not
    isSmall?: boolean;
}

/**
 * Brandcard component that displays the university name, branch and logo.
 * 
 * @example
 * function MainSidebar() {
 *   return (
 *      <BrandCard isSmall />
 *   );
 * }
 * 
 */
export default function BrandCard({ 
    isSmall
}: BrandCardProps) {

    return (
        <>
            <div className="flex gap-[4px] items-center justify-center text-[#FFFFFF]">
                <img
                    className={`
                        ${isSmall ? 'h-[60px] w-[60px]' : 'h-[140px] w-[140px]'}
                    `}
                    height={140}
                    src={logo}
                    width={140}
                />
                <div>
                    <p className={`
                        font-[800] leading-[100%] w-full 
                        ${isSmall ? 'text-[16px]' : 'text-[20px]'}
                    `}>
                        Arellano University
                    </p>
                    <p className={`
                        font-[400]
                        ${isSmall ? 'text-[10px]' : 'text-[16px]'}
                    `}>
                        Jose Abad Santos College
                    </p>
                </div>
            </div>
        </>
    );
}