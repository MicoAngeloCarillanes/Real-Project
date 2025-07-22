interface TimelineCardProps {
    taskName: string;
    status?: 'pending' | 'missed' | 'submitted';
    statusText?: string;
    subjectName: string;
}

export default function TimelineCard({
    taskName,
    status = 'pending',
    statusText,
    subjectName
}: TimelineCardProps) {

    return (
        <>
            <div className={'hover:cursor-pointer hover:bg-[#B6E7FE] border py-2 px-[6px] rounded-lg w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)]'}>
                <div className="font-medium text-[18px] truncate w-[300px]">{taskName}</div>
                <div className="text-[14px] flex justify-between">
                    <span>{subjectName}</span>
                    <span className={`${status === 'missed' ? 'text-[#BF0A12]' : status === 'submitted' ? 'text-[#0C60A1]' :  ''}`}>{statusText}</span>
                </div>
            </div>
        </>
    );
}