import CommonHeader from '@components/container/CommonHeader';
import MainDiv from '@components/container/MainDiv';
import messageIcon from '@assets/icons/message-icon.svg';
import ShadowCard from '@components/card/ShadowCard';
import React from 'react';
import DetailCard from '@components/card/DetailCard';
import CommonButton, { CommonButtonProps } from '@components/buttons/CommonButton';
import CommonTextArea from '@components/input/CommonTextArea';

interface FileMapProps {
    fileName: string;
    fileDescription: string;
};

export default function CourseTask() {
    const iconMap = [
        {
            imageUrl: messageIcon,
            pendingActCount: '5'
        }
    ];
    const fileMap: FileMapProps[] = [
        {
            fileName: 'report.docx',
            fileDescription: 'Word Document'
        },
        {
            fileName: 'presentation.pptx',
            fileDescription: 'PowerPoint Presentation'
        },
        {
            fileName: 'data.xlsx',
            fileDescription: 'Excel Spreadsheet'
        },
        {
            fileName: 'data2.xlsx',
            fileDescription: 'Excel Spreadsheet'
        }
    ];
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
        <MainDiv>
            <CommonHeader
                icons={iconMap}
                isCourseHeader
                subTitle="ITC-129 LEC (MWF / 8:00AM - 10:00AM)"
                title="Computer Organization"
            />
            <ShadowCard isLarge>
                <div className="flex flex-col gap-[16px] p-[16px] w-full">
                    <ShadowCard white>
                        <div className="flex flex-1 flex-col gap-[6px] p-[12px]">
                            <h3 className="font-[600] leading-[100%] text-[#080612] text-[14px]">Learning Task No. 4 Jose Rizal the Movie</h3>
                            <h4 className="font-[400] leading-[100%] text-[#080612] text-[12px]">Due Nov. 29, 11:59 PM</h4>
                            <p className="border-[#000000] border-b-[1px] border-t-[1px] mb-[4px] px-[5px] py-[2px] text-[#080612] text-[12px]">
                                dsaLorem ipsum odor amet, consectetuer adipiscing elit. Felis nullam fusce aenean nibh ut habitasse non dis? Maximus condimentum velit vel quam ipsum conubia vel. Magna condimentum himenaeos pretium dui ex quisque quis porta ultricies. Potenti aliquet duis leo vitae; sem elit magna. Eleifend inceptos lacus ipsum; tincidunt iaculis potenti. Potenti nec litora at facilisis molestie proin.

                                Viverra et iaculis; mattis mauris molestie vulputate nostra. Vivamus non vehicula, nec ligula pretium egestas curae. Massa morbi arcu lacinia auctor suspendisse fames vehicula. Integer gravida egestas posuere curae vivamus id rhoncus. Mattis per parturient sollicitudin, ad platea imperdiet dignissim. Euismod scelerisque habitant litora tincidunt nibh blandit mus. Consequat primis aliquam ex mattis natoque nullam sit. Varius enim ligula facilisi non erat vel congue. Class fames mollis hac velit; nostra hac.

                            </p>
                            <div className="flex flex-col gap-[4px] w-full">
                                <h5 className="leading-[100%] text-[#080612] text-[12px]">Attached Files:</h5>
                                <div className="gap-[10px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full">
                                    {fileMap.map((file, fileKey) => (
                                        <React.Fragment
                                            key={`file-${fileKey}`}
                                        >
                                            <ShadowCard>
                                                <div className="cursor-pointer flex gap-[10px] items-center px-[12px] py-[8px] w-full">
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
                                </div>
                            </div>
                        </div>
                    </ShadowCard>
                    <div className="flex gap-[16px] w-full">
                        <div className="flex-1 h-full">
                            <CommonTextArea
                                description="TESADSADQSDQ"
                                height="330px"
                                title="Test"
                            />
                        </div>
                        <div className="w-[250px]">
                            <ShadowCard white>
                                <div className="flex flex-col gap-[12px] p-[12px] w-full">
                                    <div className="flex justify-between w-full">
                                        <h3 className="font-[600] text-[#080612] text-[12px]">Status:</h3>
                                        <h4 className="font-[400] text-[#080612] text-[12px]">Pending</h4>
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-full">
                                        <p className="font-[400] leading-[100%] text-[#080612] text-[12px]">Files to be submitted:</p>
                                        <div className="flex flex-col gap-[10px] max-h-[188px] overflow-y-auto py-[4px]">
                                            {fileMap.map((file, fileKey) => (
                                                <React.Fragment key={`file-${fileKey}`}>
                                                    <ShadowCard>
                                                        <div className="cursor-pointer flex gap-[10px] items-center p-[8px] px-[12px] w-full">
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
                                        </div>
                                        <p className="font-[300] italic leading-[100%] ml-auto text-[#BF0A12] text-[12px]">Submit to update status</p>
                                    </div>
                                    <div className="flex gap-[8px] ml-auto mt-[4px]">
                                        {buttonMap.map((button, buttonKey) => (
                                            <React.Fragment key={`button-${buttonKey}`}>
                                                <CommonButton
                                                    buttonLabel={button.buttonLabel}
                                                    buttonStyle={button.buttonStyle}
                                                />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </ShadowCard>
                        </div>
                    </div>
                </div>
            </ShadowCard>
        </MainDiv>
    );
}