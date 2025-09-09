type size = 'SMALL' | 'MEDIUM' | 'LARGE';

interface CommonMediaWithContentProps {
    // Box color
    boxColor?: string;
    // Box size
    boxSize?: Exclude<size, 'LARGE'>;
    // Children to be rendered besides image
    children?: React.ReactNode;
    // Label styling
    fontSize?: Exclude<size, 'LARGE'>;
    // Checks whether the content inside are centered
    isCentered?: boolean;
    // Image to be rendered
    imageUrl?: string;
    // Image style
    imageSize?: size;
    // Checks whether to hide overflow or not
    isOverflowHidden?: boolean;
    // Checks whether display is vertical or horizontal
    isVertical?: boolean;
    // Media label
    mediaLabel?: string;
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
    boxColor = '#C0C0C0',
    boxSize = 'SMALL',
    children,
    fontSize = 'SMALL',
    isCentered,
    imageSize = 'SMALL',
    imageUrl,
    isOverflowHidden,
    isVertical,
    mediaLabel
}: CommonMediaWithContentProps) {
    // Style variables
    const boxStypeMap = {
        'MEDIUM': {
            height: '160px',
            width: '100%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
        },
        'SMALL': {
            height: '40px',
            width: '40px'
        }
    };
    const imageStyleMap = {
        'LARGE': {
            height: '90',
            width: '90'
        },
        'MEDIUM': {
            height: '25',
            width: '25'
        },
        'SMALL': {
            height: '16',
            width: '14'
        }
    };
    const fontStyleMap = {
        'MEDIUM': {
            fontWeight: 400,
            fontSize: '16px',
            color: '#080612'
        },
        'SMALL': {
            fontWeight: 400,
            fontSize: '12px',
            color: '#FFFFFF'
        }
    };
    const boxStyle = boxSize && { ...boxStypeMap[boxSize], backgroundColor: boxColor };
    const imageStyle = imageSize && imageStyleMap[imageSize];
    const fontStyle = fontSize && fontStyleMap[fontSize];

    return (
        <div
            className={`
                gap-[6px] w-full flex
                ${isVertical ? 'flex-col' : ''}
                ${isCentered ? 'items-center' : ''}
            `}
        >
            {imageUrl ? (
                <img
                    alt=""
                    height={imageStyle?.height}
                    src={imageUrl}
                    width={imageStyle?.width}
                />
            ) : (
                <div style={boxStyle}></div>
            )}
            {children}
            {mediaLabel && (
                <span
                    className={`
                        leading-[100%] text-nowrap
                        ${isOverflowHidden ? 'overflow-hidden' : ''}
                    `}
                    style={fontStyle}
                >
                    {mediaLabel}
                </span>
            )}
        </div>
    );
}