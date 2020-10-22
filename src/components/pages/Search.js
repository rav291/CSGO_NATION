import React, { useEffect, useState } from 'react'
import HLTV from 'hltv';

const getPlayerRanking = async () => {

    return await HLTV.getPlayerRanking({ startDate: '', endDate: '' })
    // .then(res => console.log(res));
}

const Search = () => {

    const [name, setName] = useState([]);
    const [rating, setRating] = useState([]);
    useEffect(() => {
        getPlayerRanking()
            .then(players => {
                players.map(player => {
                    setName()
                })
            })


    }, []); // [] indicates that this side-effect will run only once.


    return (
        <div>
            1
        </div>
    )
}

export default Search;
