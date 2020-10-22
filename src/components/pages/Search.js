import React, { useEffect, useState } from 'react'
import HLTV from 'hltv';

// Getting player id using this fn.
const getPlayerIdByName = async (text) => {

    return await HLTV.getPlayerByName({ name: text })
        .then(res => res.id)
        // .then(data => console.log(data))
        .catch(err => console.log(err));
}

//Getting player stats using id obtained from above
const getPlayerStats = (playerId) => {
    HLTV.getPlayerStats({ id: playerId })
        .then(res => Object.entries(res))

}


const Search = () => {

    const [text, setText] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        getPlayerIdByName(text)
        .then(id => setId(id))
    }, [text, id]);

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setText(text);
        console.log(text)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="player-name">
                <input type="text" value={text} placeholder="Enter Player's in game name" onChange={onChange} />
                <input type="Submit" defaultValue="Search"></input>
            </form>
        </div>
    )
}

export default Search;

// Why isn't the e.target.value working, rather value={text} is to be used ??