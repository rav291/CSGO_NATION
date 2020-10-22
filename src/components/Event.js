import React from 'react'

const Event = ({ event }) => {
    return (
        <tr>
            <td>
                <li>{String(new Date(event.dateStart * 1000)).substring(4, 10)}</li>
            </td>
            <td>{event.name}</td>
            <td>
                <li>{String(new Date(event.dateEnd * 1000)).substring(4, 10)}</li>
            </td>
        </tr>

    )
}

export default Event;
