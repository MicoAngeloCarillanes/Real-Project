type size = 'SMALL' | 'MEDIUM' | 'LARGE';

interface CommonMediaWithContentProps {
    // Children to be rendered besides image
    children?: React.ReactNode;
    // Image to be rendered
    imageUrl?: string;
    // Checks whether display is vertical or horizontal
    isVertical?: boolean;
    // Spacing between image and children
    size?: size;
}

/**
 * Common media label component that displays either an image or icon with label.
 *
 * @example
 * import logo from '@assets/images/au-logo.svg';
 *
 * function Contacts() {
 *   return (
 *      <CommonMediaWithContent
 *          imageUrl={logo}
 *          isVertical
 *          size="LARGE"
 *      >
 *          <span className="leading-[100%] text-[16px] text-[black]">
 *              Julius Robert T. Tolentino
 *          </span>
 *      </CommonMediaWithContent>
 *   );
 * }
 */
export default function CommonMediaWithContent({
    children,
    imageUrl,
    isVertical,
    size
}: CommonMediaWithContentProps) {
    // Style variables
    const styleMap = {
        'SMALL': {
            gap: 6,
            height: '16',
            width: '14'
        },
        'MEDIUM': {
            gap: 6,
            height: '25',
            width: '25'
        },
        'LARGE': {
            gap: 6,
            height: '90',
            width: '90'
        }
    };
    const style = size && styleMap[size];

    return (
        <div
            className={`
                ${isVertical ? 'flex flex-col items-center' : 'flex items-center'}
            `}
            style={style}
        >
            <img
                alt=""
                height={style?.height}
                src={imageUrl}
                width={style?.width}
            />
            {children}
        </div>
    );
}