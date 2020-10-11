import React from 'react'

const Event = ({ event }) => {
    return (
        <div>
            <li className="aladin size" >{event.name}</li>
            <div>
                Date start:<li>{String(new Date(event.dateStart * 1000)).substring(4, 10)}</li>
                Date End: <li>{String(new Date(event.dateEnd * 1000)).substring(4, 10)}</li>
            </div>
        </div>

    )
}

export default Event;
