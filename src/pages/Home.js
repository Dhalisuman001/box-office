import React, { useState } from "react";
import ActorGrid from "../actor/ActorGrid";
import CustomRadioButton from "../components/CustomRadioButton";
import MainLayout from "../components/MainLayout";
import { getApi } from "../misc/config";
import { useLastQuary } from "../misc/custom-hooks";
import ShowGrid from "../show/ShowGrid";
import {
    RadioInputsWrapper,
    SearchButtonWrapper,
    SearchInput,
} from "./HomeStyled";

const Home = () => {
    const [input, setInput] = useLastQuary();
    const [result, setResult] = useState(null);
    const [searchType, setSearchType] = useState("shows");
    const isSearchShow = searchType === "shows";

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    };
    const onSearch = () => {
        getApi(`/search/${searchType}?q=${input}`).then((result) => {
            setResult(result);
        });
    };
    const onEnter = (ev) => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };
    const renderResult = () => {
        if (result && result.length === 0) {
            return <div>No result found!</div>;
        }
        if (result && result.length > 0) {
            return result[0].show ? (
                <ShowGrid data={result} />
            ) : (
                <ActorGrid data={result} />
            );
        }

        return null;
    };

    const toggleSearch = (ev) => {
        setSearchType(ev.target.value);
    };

    return (
        <MainLayout>
            <SearchInput
                type="text"
                onChange={onInputChange}
                value={input}
                onKeyDown={onEnter}
                placeholder="Search for something"
            />
            <RadioInputsWrapper>
                <div>
                    <CustomRadioButton
                        label='Shows'
                        id="shows-search"
                        value="shows"
                        checked={isSearchShow}
                        onChange={toggleSearch}
                    />
                </div>
                <div>
                    <CustomRadioButton
                        label='Actors'
                        id="actors-search"
                        value="people"
                        checked={!isSearchShow}
                        onChange={toggleSearch}
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={onSearch}>
                    Search
                </button>
            </SearchButtonWrapper>
            {renderResult()}
        </MainLayout>
    );
};

export default Home;
