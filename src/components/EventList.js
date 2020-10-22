import React from 'react'
import Event from './Event'

const EventList = ({ event }) => {
    return (
        <table id="ranking">
            <tr>
                <th>Date Start</th>
                <th>Tournament</th>
                <th>Date End</th>
            </tr>
            { event.map(event => (
                <Event event={event} key={event.id} />
            ))}
        </table>
    )
}

export default EventList
