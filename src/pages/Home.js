import React, { useState } from "react";
import MainLayout from '../components/MainLayout'
import { getApi } from "../misc/config";

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const onInputChange = (ev) => {
        setInput(ev.target.value);

    }
    const onSearch = () => {
        getApi(`/search/shows?q=${input}`).then(result => {
            setResult(result);
        });
    }
    const onEnter = (ev) => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    }
    const renderResult = () => {
        if (result && result.length === 0) {
            return <div>No result found!</div>
        }
        if (result && result.length > 0) {
            return <div>{result.map((item) => <div key={item.show.id}>{item.show.name}</div>)}</div>

        }
        return null;
    }
    return (
        <MainLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onEnter} />
            <button type="button" onClick={onSearch} >Search</button>
            {renderResult()}
        </MainLayout>
    )
}

export default Home