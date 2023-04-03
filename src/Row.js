import React, { useEffect, useState } from 'react'
import './row.css'
function Row({ title, fetchUrl, isLargeRow }) {
    const [state, setState] = useState([])
    const baseUrl = `https://image.tmdb.org/t/p/original/`;
    useEffect(() => {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                setState(data.results)
            })
    }, [fetchUrl])
    return (
        <div className='row'>
            <h2>{title}</h2>
            {console.log(state)}
            <div className='row__posters'>
                {state.map((m) => <img src={`${baseUrl}${isLargeRow ? m.poster_path : m.backdrop_path}`} alt={m.title} key={m.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} />)}
            </div>
        </div>
    )
}

export default Row