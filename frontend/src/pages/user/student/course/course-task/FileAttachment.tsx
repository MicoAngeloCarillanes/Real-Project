import DetailCard from '@components/card/DetailCard';
import ShadowCard from '@components/card/ShadowCard';
import CommonMediaWithContent from '@components/label/CommonMediaWithContent';
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
                            <CommonMediaWithContent>
                                <DetailCard
                                    cardDescription={file.fileDescription}
                                    cardName={file.fileName}
                                    isCourse
                                    isTransparent
                                />
                            </CommonMediaWithContent>
                        </div>
                    </ShadowCard>
                </React.Fragment>
            ))}
        </>
    );
}