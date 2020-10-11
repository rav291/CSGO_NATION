import React from 'react'
import EventList from '../EventList'

const FutureEvents = ({ events }) => {
    return (
        <div>
            <ul className="csgo text-center m-2" >
                {events.map(event => (
                    <EventList event={event} />
                ))}
            </ul>
        </div>
    )
}

export default FutureEvents
