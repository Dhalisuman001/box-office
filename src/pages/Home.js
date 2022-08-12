import React, { useState } from "react";
import MainLayout from '../components/MainLayout'
import { getApi } from "../misc/config";

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [searchType, setSearchType] = useState('shows');
    const isSearchShow = searchType === 'shows';

    const onInputChange = (ev) => {
        setInput(ev.target.value);

    }
    const onSearch = () => {
        getApi(`/search/${searchType}?q=${input}`).then(result => {
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
            return result[0].show ? result.map((item) => <div key={item.show.id}>{item.show.name}</div>) :
                result.map((item) => <div key={item.person.id}>{item.person.name}</div>);
        }


        return null;
    }

    const toggleSearch = (ev) => {
        setSearchType(ev.target.value);

    }
    console.log(searchType)

    return (
        <MainLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onEnter} placeholder="Search for something" />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input type='radio' id='shows-search' value='show' checked={isSearchShow} onChange={toggleSearch} />
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input type='radio' id='actors-search' value='people' checked={!isSearchShow} onChange={toggleSearch} />
                </label>
            </div>

            <button type="button" onClick={onSearch} >Search</button>
            {renderResult()}
        </MainLayout>
    )
}

export default Home