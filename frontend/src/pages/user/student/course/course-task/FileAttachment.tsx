import DetailCard from '@components/card/DetailCard';
import ShadowCard from '@components/card/ShadowCard';
import React from 'react';

export interface FileMapProps {
    fileName: string;
    fileDescription: string;
};

export interface FileAttachmentProps {
    fileList?: FileMapProps[];
}

export default function FileAttachment({
    fileList
}: FileAttachmentProps) {

    return (
        <>
            {fileList && fileList.map((file, fileKey) => (
                <React.Fragment
                    key={`file-${fileKey}`}
                >
                    <ShadowCard>
                        <div className="cursor-pointer flex gap-[10px] items-center max-h-[264px] px-[12px] py-[8px] w-full">
                            <div className="bg-[#C0C0C0] h-[40px] w-[40px]"></div>
                            <DetailCard
                                cardName={file.fileName}
                                cardDescription={file.fileDescription}
                                isFile
                                isTransparent
                            />
                        </div>
                    </ShadowCard>
                </React.Fragment>
            ))}
        </>
    );
}