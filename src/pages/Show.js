import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';
import ShowMainData from '../show/ShowMainData';
import Data from '../show/Data';
import Seasons from '../show/Seasons';
import Cast from '../show/Cast';
import { InfoBlock, ShowPageWrapper } from './ShowStylePages';
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, show: action.show };
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error };
        }

        default:
            return prevState;
    }
};

const initialState = {
    show: null,
    isLoading: true,
    error: null,
};


const Show = () => {
    const { id } = useParams();
    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {

        let isMounted = true;
        getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {
            if (isMounted) {
                dispatch({ type: 'FETCH_SUCCESS', show: result });
            }

        }).catch(err => {
            dispatch({ type: 'FETCH_FAILED', error: err.message });
        })

        return () => {
            isMounted = false;
        };

    }, [id])


    if (isLoading) {
        return <div>Data is being loading</div>
    }
    if (error) {
        return <div>Error occured</div>
    }
    return <ShowPageWrapper>
        <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />
        <InfoBlock>
            <h2>Details</h2>
            <Data status={show.status} network={show.network} premered={show.premered} />
        </InfoBlock>
        <InfoBlock>
            <h2>Season</h2>
            <Seasons seasons={show._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={show._embedded.cast} />
        </InfoBlock>
    </ShowPageWrapper>
}

export default Show