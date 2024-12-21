"use client"
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
    {
        id: 1,
        title: "Meeting",
        time: "12:30 - 3:00 pm",
        description: "The First Day of the Month Meeting message",
    },
    {
        id: 2,
        title: "Birthday",
        time: "3:45 - 5:00 pm",
        description: "The First Day of the Month Birthday message",
    },
    {
        id: 3,
        title: "Vacation",
        time: "8:00 - 10:00 am",
        description: "The First Day of the Month Vacation message",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
         <Calendar onChange={onChange} value={value} />
         <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src={"/moreDark.png"} alt="" width={20} height={20}/>
         </div>
         <div className="flex flex-col gap-4">
            {events.map((event) => (
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-ngollogreen even:border-ngolloblue" key={event.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{event.title}</h1>
                        <span>{event.time}</span>
                    </div>
                    <p>{event.description}</p>
                </div>
            ))}
         </div>
    </div>
  );
};

export default EventCalendar