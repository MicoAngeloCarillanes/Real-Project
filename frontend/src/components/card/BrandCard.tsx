import logo from '@assets/images/au-logo.svg';
import { classMerge } from '@utils/css.util';

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
                    className={
                        classMerge(
                            isSmall
                                ? 'h-[60px] w-[60px]'
                                : 'h-[140px] w-[140px]'
                        )
                    }
                    height={140}
                    src={logo}
                    width={140}
                />
                <div>
                    <p className={
                        classMerge(
                            'font-[800] leading-[100%] w-full mb-[2px]',
                            isSmall
                                ? 'text-[16px]'
                                : 'text-[20px]'
                        )
                    }>
                        Arellano University
                    </p>
                    <p className={
                        classMerge(
                            'font-[400] leading-[100%]',
                            isSmall
                                ? 'text-[10px]'
                                : 'text-[16px]'
                        )
                    }>
                        Jose Abad Santos College
                    </p>
                </div>
            </div>
        </>
    );
}