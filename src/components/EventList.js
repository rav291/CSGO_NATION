import React from 'react'
import Event from './Event'

const EventList = ({ event }) => {
    return (
        <div className="grid-3 " >
            { event.map(event => (
                <Event event={event} key={event.id} />
            ))}
        </div>
    )
}

export default EventList
