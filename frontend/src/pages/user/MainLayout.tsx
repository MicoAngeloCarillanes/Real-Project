// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import BrandCard from '@components/card/BrandCard';
// import CommonIconLabel from '@components/Label/CommonIconLabel';
// import CommonImageLabel from '@components/Label/CommonImageLabel';
// import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
// import logo from '@assets/images/au-logo.png';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import SearchInput from '@components/input/SearchInput';
// import SmallCard from '@components/card/SmallCard';
// import TabButtonGroup from '@components/buttons/TabButtonGroup';
// import TimelineCard from '@components/card/TimelineCard';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import IconSelect from '@components/select/IconSelect';

export default function MainLayout() {
    // const [date, setDate] = useState<Date | null>(new Date());
    // const tabOptions = ['Dashboard', 'Course', 'Chats', 'Settings'];
    // const timelineSortingOptions = ['All', 'Overdue', 'Upcoming', 'No due date'];

    return(
        <>
            <div className="flex min-h-screen text-white">

                {/* Sidebar - Fixed on lg+, collapsible on smaller screens */}
                <aside className="
                    bg-[#0C60A1] 
                    p-4 md:p-6 
                    flex flex-col gap-4 md:gap-6 
                    overflow-y-auto 
                    w-full sm:w-[280px] lg:w-[17.5em] 
                    fixed sm:static 
                    h-full 
                    hide-scrollbar-until-scroll
                ">

                    {/* Logo */}
                    <div className="mb-4 md:mb-2">
                        <img src="/logo.png" alt="Arellano Logo" className="w-32 sm:w-full object-contain mx-auto sm:mx-0" />
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2">
                        <button className="bg-white/20 px-3 py-2 rounded text-left text-xs sm:text-sm lg:text-[0.825em] hover:bg-white/30 transition">Dashboard</button>
                        <button className="hover:bg-white/10 px-3 py-2 rounded text-left text-xs sm:text-sm lg:text-[0.825em]">Courses</button>
                        <button className="hover:bg-white/10 px-3 py-2 rounded text-left text-xs sm:text-sm lg:text-[0.825em]">Chats</button>
                        <button className="hover:bg-white/10 px-3 py-2 rounded text-left text-xs sm:text-sm lg:text-[0.825em]">Settings</button>
                    </nav>

                    {/* Contacts */}
                    <div className="mt-4 md:mt-6">
                        <h4 className="font-semibold mb-2 text-sm lg:text-[0.825em]">Contacts</h4>
                        <div className="flex flex-col gap-1 text-xs sm:text-sm lg:text-[0.825em]">
                            <div>Mico Angelo M. Carillanes</div>
                            <div>List Item 1</div>
                            <div>List Item 2</div>
                            <div>List Item 3</div>
                            <div>List Item 4</div>
                        </div>
                    </div>

                    {/* Bottom Options */}
                    <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-white/30 text-xs sm:text-sm lg:text-[0.825em]">
                        <button className="hover:underline text-left">Data Privacy</button>
                        <button className="hover:underline text-left">Technical Support</button>
                        <button className="hover:underline text-left">Logout</button>
                    </div>

                </aside>

                {/* Main Content Wrapper */}
                <div className="flex-1 flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6 bg-gray-100 text-black ml-0 transition-all">

                    {/* Main Content */}
                    <main className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-lg overflow-y-auto text-xs sm:text-sm xl:text-base">
                        <h1 className="text-xl md:text-2xl font-bold mb-4">Dashboard</h1>
                        <p className="mb-2 text-gray-700">News/Announcement Page</p>

                        {/* Announcement */}
                        <div className="border p-4 rounded-lg bg-white">
                            <h2 className="font-bold text-red-600 text-center mb-2 text-sm md:text-base">BEWARE OF ONLINE SCAMS</h2>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
          Here are a few tips to stay safe:<br />
          • Verify the source<br />
          • Avoid sharing personal info<br />
          • Be skeptical of too-good-to-be-true offers<br />
          • Check for secure websites<br />
          • Report suspicious activity
                            </p>
                        </div>
                    </main>

                    {/* Right Panel */}
                    <aside className="w-full lg:w-[320px] flex flex-col gap-4 md:gap-6 text-xs sm:text-sm xl:text-base">

                        {/* Profile */}
                        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-full mb-2"></div>
                            <p className="font-semibold">Mico Angelo M. Carillanes</p>
                        </div>

                        {/* Calendar */}
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <p className="text-center font-semibold">November</p>
                            <div className="h-40 md:h-48 bg-gray-100 mt-2 rounded"></div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-2">
                            <div className="flex justify-between items-center font-semibold text-[#052554] text-sm md:text-base">
                                <span>Timeline</span>
                                <button className="text-xs sm:text-sm text-blue-600">All</button>
                            </div>

                            <div className="text-xs sm:text-sm text-gray-700">
                                <p>Learning Task No.4 - Submitted</p>
                                <p>Due Nov. 29, 11:59PM</p>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-700">
                                <p>Learning Task No.4 - Missed</p>
                                <p>Due Nov. 29, 11:59PM</p>
                            </div>
                        </div>

                    </aside>

                </div>

            </div>

            {/* <div className="flex flex-col lg:flex-row w-full min-h-screen p-4 lg:p-[3.125rem] gap-6">
                <aside className="fixed top-0 bottom-0 left-0 bg-[#0C60A1] flex flex-col text-white p-4 sm:p-6 lg:p-[3.125rem] w-full sm:w-[250px] lg:w-[350px] overflow-y-auto gap-6">
                    <BrandCard small />
                    <TabButtonGroup tabOptions={tabOptions} />

                    <div>
                        <SearchInput />
                        <div className="border-t-2 border-b-2 border-white h-[19.5rem] overflow-y-auto mt-4 p-2 scrollbar-thin scrollbar-thumb-white">
                            <CommonImageLabel imageUrl={logo} name={'Mic3213212131231232121312312321o Angelo Carillanes'} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                        <CommonIconLabel icon={<LockOutlinedIcon />} label={'Data Privacy'} />
                        <CommonIconLabel icon={<ContactSupportOutlinedIcon />} label={'Technical Support'} />
                        <CommonIconLabel icon={<LogoutOutlinedIcon />} label={'Logout'} />
                    </div>

                </aside>
                <main className="flex-1 bg-pink-100 min-h-[500px] p-4 rounded-lg">
                    <Outlet />
                </main>
                <aside className="bg-[#F6F4FB] flex flex-col gap-6 w-full lg:w-[370px] min-h-[500px] p-4 rounded-lg shadow-lg">

                    <div className="flex flex-col items-center">
                        <img src={logo} height="120" width="120" />
                        <h1 className="text-lg lg:text-[1.5em] mt-2">Mico Angelo M. Carillanes</h1>
                    </div>

                    <SmallCard backgroundColor="white">
                        <div className="flex flex-col font-semibold justify-center relative text-[#052554]">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
                            </LocalizationProvider>
                            <button 
                                className="absolute bottom-5 left-0 right-0 text-center text-sm text-blue-600"
                                onClick={() => setDate(new Date())}
                            >
                    Today
                            </button>
                        </div>
                    </SmallCard>
                    <SmallCard backgroundColor="white">
                        <div className="flex flex-col px-4 py-3 min-h-[23rem] gap-5">
                            <div className="flex font-semibold items-center justify-between text-[#052554]">
                                <span className="mx-auto">Timeline</span>
                                <IconSelect selectOptions={timelineSortingOptions}>
                                    <ArrowDropDownOutlinedIcon />
                                </IconSelect>
                            </div>
                            <div className="flex flex-col gap-2">
                                <TimelineCard taskName="Learning Task No. 4 Jose Rizal the Movie" status="submitted" statusText="Due Nov. 29, 11:59 PM" subjectName="ITC - 129 LEC" />
                                <TimelineCard taskName="Learning Task No. 4 Jose Rizal the Movie" statusText="Due Nov. 29, 11:59 PM" subjectName="ITC - 129 LEC" />
                                <TimelineCard taskName="Learning Task No. 4 Jose Rizal the Movie" status="submitted" statusText="Due Nov. 29, 11:59 PM" subjectName="ITC - 129 LEC" />
                                <TimelineCard taskName="Learning Task No. 4 Jose Rizal the Movie" status="missed" statusText="Due Nov. 29, 11:59 PM" subjectName="ITC - 129 LEC" />
                            </div>
                        </div>
                    </SmallCard>
                </aside>
            </div> */}
        </>
    );
}