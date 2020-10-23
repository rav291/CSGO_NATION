import React from 'react'
import Event from './Event'

const EventList = ({ event }) => {
    return (
        <table id="ranking">
            <thead>
                <tr>
                    <th>Date Start</th>
                    <th>Tournament</th>
                    <th>Date End</th>
                </tr>
            </thead>
            <tbody>
                {event.map(event => (
                    <Event event={event} key={event.id} />
                ))}
            </tbody>
        </table>
    )
}

export default EventList
