import React from 'react'

export const TeamName = ({ place, name, points, change }) => {

    return (
            <tr>
                <td>{place}</td>
                <td>{name}</td>
                <td>{points}</td>
                <td>{change}</td>
            </tr>
    )
}

export default TeamName;
