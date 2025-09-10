import { classMerge } from '@utils/css.util';
import React, { useState } from 'react';

export default function Calendar() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Start of month
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay(); // 0=Sun, 1=Mon, ...
    const daysInMonth = new Date(year, month + 1, 0)
        .getDate();
    const daysInPrevMonth = new Date(year, month, 0)
        .getDate();

    // Adjust so week starts on Monday
    const offset = (startDay + 6) % 7;

    // Generate array of dates to display
    const calendarDays: {
    day: number;
    currentMonth: boolean;
  }[] = [];

    // Previous month days
    for (let i = offset - 1; i >= 0; i--) {
        calendarDays.push({
            day: daysInPrevMonth - i,
            currentMonth: false
        });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push({
            day: i,
            currentMonth: true
        });
    }

    // Fill next month to complete full weeks (42 cells = 6 weeks max)
    while (calendarDays.length < 35) {
        calendarDays.push({
            day: calendarDays.length - (offset + daysInMonth) + 1,
            currentMonth: false
        });
    }

    const monthLabel = currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="p-[8px] pt-[16px] w-max">
            <div className="font-[600] leading-[100%] mb-[16px] text-[#052554] text-[12px] text-center">{monthLabel}</div>
            <div className="gap-x-[12px] gap-y-[8px] grid grid-cols-[repeat(7,minmax(0,1fr))]">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div
                        className="font-[500] mb-[4px] text-[#052554] text-[10px] text-center"
                        key={day}
                    >
                        {day}
                    </div>
                ))}
                {calendarDays.map((date, i) => (
                    <div
                        className={
                            classMerge(
                                'cursor-pointer text-[12px] text-center',
                                date.currentMonth ? 'text-[#080612]' : 'text-[#C0C0C0]'
                            )
                        }
                        key={i}
                    >
                        {date.day}
                    </div>
                ))}
            </div>
        </div>
    );
}