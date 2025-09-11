import CommonButton, { CommonButtonProps } from '@components/buttons/CommonButton';
import ShadowCard from '@components/card/ShadowCard';
import CommonTextArea from '@components/input/CommonTextArea';
import FileAttachment, { FileAttachmentProps } from '@pages/user/student/course/course-task/FileAttachment';
import React from 'react';

export default function CourseSubmissionArea({
    fileList
}: FileAttachmentProps) {
    // Custom variables
    const buttonMap:CommonButtonProps[] = [
        {
            buttonLabel: 'Add',
            buttonStyle: 'white'
        },
        {
            buttonLabel: 'Submit',
            buttonStyle: 'blue'
        }
    ];

    return (
        <div className="w-full">
            <div className="flex gap-[16px] w-full">
                <CommonTextArea
                />
                <div className="min-w-[250px]">
                    <ShadowCard white>
                        <div className="flex flex-col gap-[12px] p-[12px] w-full">
                            <div className="flex justify-between w-full">
                                <h3 className="font-[600] text-[#080612] text-[12px]">Status:</h3>
                                <h4 className="font-[400] text-[#080612] text-[12px]">Pending</h4>
                            </div>
                            <div className="flex flex-col gap-[8px] w-full">
                                <p className="font-[400] leading-[100%] text-[#080612] text-[12px]">Files to be submitted:</p>
                                <div className="flex flex-col gap-[10px] max-h-[264px] overflow-y-auto py-[4px]">
                                    <FileAttachment fileList={fileList} />
                                </div>
                                <p className="font-[300] italic leading-[100%] ml-auto text-[#BF0A12] text-[12px]">Submit to update status</p>
                            </div>
                            <div className="flex gap-[8px] ml-auto mt-[4px]">
                                {buttonMap.map((button, buttonKey) => (
                                    <React.Fragment key={`button-${buttonKey}`}>
                                        <CommonButton
                                            buttonLabel={button.buttonLabel}
                                            buttonStyle={button.buttonStyle}
                                            isShadowed
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </ShadowCard>
                </div>
            </div>
        </div>
    );
}