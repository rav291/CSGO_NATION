import React from 'react'
import TeamName from '../TeamName'


const Ranking = ({ teams }) => {
    return (
            <table id="ranking">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Rank Change</th>
                    
                </tr>
                {teams.map(team => (
                    <TeamName
                        key={team[1].team.id}
                        name={team[1].team.name}
                        points={team[1].points}
                        place={team[1].place}
                        change={team[1].change} />
                ))}
            </table>
    )
}

export default Ranking;
