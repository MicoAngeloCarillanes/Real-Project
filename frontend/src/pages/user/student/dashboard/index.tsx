import lockIcon from '@assets/icons/lock-icon.svg';
import supportIcon from '@assets/icons/support-icon.svg';
import newsImage from '@assets/images/newsImage.png';
import ShadowCard from '@components/card/ShadowCard';
import CommonHeader from '@components/container/CommonHeader';
import MainDiv from '@components/container/MainDiv';

export default function StudentDashboard() {
    const iconMap = [
        {
            iconUrl: lockIcon
        },
        {
            iconUrl: supportIcon
        }
    ];

    return (
        <MainDiv>
            <CommonHeader 
                title="Dashboard"
                subTitle="News/Announcement Page"
                icons={iconMap}
            /> 
            <ShadowCard>
                <div className="px-[20px]">
                    <img 
                        src={newsImage}
                    />
                </div>
            </ShadowCard>
        </MainDiv>
    );
}