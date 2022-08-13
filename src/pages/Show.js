import React from 'react'
import { useParams } from 'react-router-dom';
// import { getApi } from '../misc/config';
import ShowMainData from '../show/ShowMainData';
import Data from '../show/Data';
import Seasons from '../show/Seasons';
import Cast from '../show/Cast';
import { InfoBlock, ShowPageWrapper } from './ShowStylePages';
import { useShow } from '../misc/custom-hooks';




const Show = () => {
    const { id } = useParams();
    const [isLoading, show, error] = useShow(id);
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