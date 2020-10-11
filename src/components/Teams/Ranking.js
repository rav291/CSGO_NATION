import React from 'react'
import TeamName from '../TeamName'


const Ranking = ({ teamNames }) => {
    return (
        <div>
            <ol className="text-center" >
                {teamNames.map(team => (
                    <TeamName key={team.id} team={team} />
                ))}
            </ol>
        </div>
    )
}

export default Ranking;
