interface SmallCardProps {
    backgroundColor: 'white' | '#F6F4FB';
    children: React.ReactNode;
}

export default function SmallCard({
    backgroundColor,
    children
}: SmallCardProps) {

    return (
        <>
            <div className={`rounded-lg w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${backgroundColor === 'white' ? 'bg-white' : 'bg-[#F6F4FB]'}`}>
                {children}
            </div>
        </>
    );
}