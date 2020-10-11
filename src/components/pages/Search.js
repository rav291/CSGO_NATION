import React from 'react'


// const getPlayer = (async () => {
//         HLTV.getPlayerByName({ name: "dupreeh" })
//             .then(res => console.log(res))
//     })()
const Search = () => {


    return (
        <div>
            <input type="text" placeholder="Enter player name" />
            <button className="btn-sm btn-primary">Search</button>
        </div>
    )
}

export default Search
