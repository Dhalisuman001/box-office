import React, { useState } from "react";
import MainLayout from '../components/MainLayout'


const Home = () => {
    const [input, setInput] = useState('');
    const onInputChange = (ev) => {
        setInput(ev.target.value);

    }
    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=men
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
            console.log(result);
        });
    }
    const onEnter = (ev) => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    }
    return (
        <MainLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onEnter} />
            <button type="button" onClick={onSearch} >Search</button>
        </MainLayout>
    )
}

export default Home