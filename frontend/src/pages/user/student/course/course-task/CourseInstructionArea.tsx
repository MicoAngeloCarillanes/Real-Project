import ShadowCard from '@components/card/ShadowCard';
import FileAttachment, { FileAttachmentProps } from '@pages/user/student/course/course-task/FileAttachment';

export default function CourseInstructionArea({
    fileList
}: FileAttachmentProps) {

    return (
        <ShadowCard white>
            <div className="flex flex-1 flex-col gap-[6px] p-[12px]">
                <h3 className="font-[600] leading-[100%] text-[#080612] text-[14px]">Learning Task No. 4 Jose Rizal the Movie</h3>
                <h4 className="font-[400] leading-[100%] text-[#080612] text-[12px]">Due Nov. 29, 11:59 PM</h4>
                <p className="border-[#000000] border-b-[1px] border-t-[1px] mb-[4px] px-[5px] py-[2px] text-[#080612] text-[12px]">
                    dsaLorem ipsum odor amet, consectetuer adipiscing elit. Felis nullam fusce aenean nibh ut habitasse non dis? Maximus condimentum velit vel quam ipsum conubia vel. Magna condimentum himenaeos pretium dui ex quisque quis porta ultricies. Potenti aliquet duis leo vitae; sem elit magna. Eleifend inceptos lacus ipsum; tincidunt iaculis potenti. Potenti nec litora at facilisis molestie proin.
                    Viverra et iaculis; mattis mauris molestie vulputate nostra. Vivamus non vehicula, nec ligula pretium egestas curae. Massa morbi arcu lacinia auctor suspendisse fames vehicula. Integer gravida egestas posuere curae vivamus id rhoncus. Mattis per parturient sollicitudin, ad platea imperdiet dignissim. Euismod scelerisque habitant litora tincidunt nibh blandit mus. Consequat primis aliquam ex mattis natoque nullam sit. Varius enim ligula facilisi non erat vel congue. Class fames mollis hac velit; nostra hac.
                    dsaLorem ipsum odor amet, consectetuer adipiscing elit. Felis nullam fusce aenean nibh ut habitasse non dis? Maximus condimentum velit vel quam ipsum conubia vel. Magna condimentum himenaeos pretium dui ex quisque quis porta ultricies. Potenti aliquet duis leo vitae; sem elit magna. Eleifend inceptos lacus ipsum; tincidunt iaculis potenti. Potenti nec litora at facilisis molestie proin.
                    Viverra et iaculis; mattis mauris molestie vulputate nostra. Vivamus non vehicula, nec ligula pretium egestas curae. Massa morbi arcu lacinia auctor suspendisse fames vehicula. Integer gravida egestas posuere curae vivamus id rhoncus. Mattis per parturient sollicitudin, ad platea imperdiet dignissim. Euismod scelerisque habitant litora tincidunt nibh blandit mus. Consequat primis aliquam ex mattis natoque nullam sit. Varius enim ligula facilisi non erat vel congue. Class fames mollis hac velit; nostra hac.
                </p>
                <div className="flex flex-col gap-[4px] w-full">
                    <h5 className="leading-[100%] text-[#080612] text-[12px]">Attached Files:</h5>
                    <div className="gap-[10px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full">
                        <FileAttachment fileList={fileList}/>
                    </div>
                </div>
            </div>
        </ShadowCard>
    );
}