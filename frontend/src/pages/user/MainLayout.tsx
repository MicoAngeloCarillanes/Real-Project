// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import SmallCard from '@components/card/SmallCard';
// import TimelineCard from '@components/card/TimelineCard';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import IconSelect from '@components/select/IconSelect';
import MainSideBar from '@components/MainSideBar';
// import logo from '@assets/images/au-logo.png';

export default function MainLayout() {
    // const [date, setDate] = useState<Date | null>(new Date());
    // const timelineSortingOptions = ['All', 'Overdue', 'Upcoming', 'No due date'];

    return(
        <>
            <div className="flex flex-col lg:flex-row w-full min-h-screen p-4 lg:p-[3.125rem] gap-6">
                <MainSideBar />
                {/* <main className="flex-1 bg-pink-100 min-h-[500px] p-4 rounded-lg">
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
                </aside> */}
            </div>
        </>
    );
}