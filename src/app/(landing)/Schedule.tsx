import { ReactNode } from 'react';
import Section from '../../components/Section';

export default function Schedule() {
    return (
        <Section title="Schedule" id="schedule">
            <div className="flex flex-wrap gap-8">
                <ScheduleDay name="January 25 (Saturday)">
                    <ScheduleItem start="1:30 PM">Doors Open</ScheduleItem>
                    <ScheduleItem start="2:00 PM" end="2:30 PM">Opening Ceremony</ScheduleItem>
                    <ScheduleItem start="2:30 PM" end="3:00 PM">Team Formation</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold style={{ backgroundColor: 'rgba(244, 119, 34, 0.3)' }}>Hacking Begins</ScheduleItem>
                    <ScheduleItem start="3:15 PM" end="4:45 PM">Intro to Code / Web Development Workshop</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="6:30 PM">Basic AI and ML / Game Dev in Python Workshop</ScheduleItem>
                    <ScheduleItem start="6:30 PM">Dinner</ScheduleItem>
                    <ScheduleItem start="7:00 PM" end="7:30 PM">Coding Trivia Kahoot</ScheduleItem>
                    <ScheduleItem start="7:30 PM" end="9:00 PM">Web-scraping / Discord Bots Workshop</ScheduleItem>
                    <ScheduleItem start="9:30 PM" end="10:00 PM">Cow Drawing Competition</ScheduleItem>
                    <ScheduleItem start="10:00 PM" end="12:00 AM">Movie Night</ScheduleItem>
                </ScheduleDay>
                <ScheduleDay name="January 26 (Sunday)">
                    <ScheduleItem start="8:00 AM">Breakfast</ScheduleItem>
                    <ScheduleItem start="10:00 AM" end="10:30 AM">Programming-themed Skribbl.io</ScheduleItem>
                    <ScheduleItem start="12:00 PM">Lunch</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold style={{ backgroundColor: 'rgba(244, 119, 34, 0.3)' }}>Hacking Ends</ScheduleItem>
                    <ScheduleItem start="3:00 PM" end="5:00 PM">Presentations & Demos (Judging)</ScheduleItem>
                    <ScheduleItem start="4:00 PM" end="4:45 PM">Code Golf</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="5:30 PM">Awards & Closing Ceremony</ScheduleItem>
                    <ScheduleItem start="5:30 PM" end="6:00 PM">Awards Distribution</ScheduleItem>
                    <ScheduleItem start="6:00 PM" end="6:30 PM">Cleanup & Doors Close</ScheduleItem>
                </ScheduleDay>
            </div>
        </Section>
    );
}

function ScheduleDay(props: { name: string; children: ReactNode }) {
    return (
        <div className="w-96 flex-grow">
            <h3 className="text-2xl font-bold mb-3">{props.name}</h3>
            <table className="table-fixed w-full text-left">
                <thead>
                    <tr>
                        <th className="p-2 w-28">Start</th>
                        <th className="p-2 w-28 hidden sm:table-cell">End</th>
                        <th className="p-2">Event</th>
                    </tr>
                </thead>
                <tbody>{props.children}</tbody>
            </table>
        </div>
    );
}

function ScheduleItem(props: { start: string; end?: string; bold?: boolean; children: ReactNode }) {
    return (
        <tr className={'border-t' + (props.bold ? ' font-bold' : '')}>
            <td className="p-2">{props.start}</td>
            <td className="p-2 hidden sm:table-cell">{props.end}</td>
            <td className="p-2">{props.children}</td>
        </tr>
    );
}
