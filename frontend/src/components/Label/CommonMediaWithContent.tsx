interface CommonMediaWithContentProps {
    // Children to be rendered besides image
    children?: React.ReactNode;
    // Spacing between image and children
    gap?: number;
    // Image height
    height?: number;
    // Image to be rendered
    imageUrl?: string; 
    // Image width
    width?: number;
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
 *          element={logo} 
 *          label="Arellano University"
 *      />
 *   );
 * }
 */
export default function CommonMediaWithContent({
    children,
    gap,
    height,
    imageUrl,
    width
}: CommonMediaWithContentProps) {
    // Custom variables
    const containerStyle = `flex gap-[${gap}px] items-center text-[#FFFFFF]`;

    return (
        <div className={containerStyle}>
            <img 
                alt=""
                height={height}
                src={imageUrl}
                width={width}
            />
            {children}
        </div>
    );
}