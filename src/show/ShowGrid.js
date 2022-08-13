import React from 'react'
import ShowCard from './ShowCard';
import img from '../asset/not-found.png';
import { FlexGrid } from '../components/Styled';
import { useShows } from '../misc/custom-hooks';
const ShowGrid = ({ data }) => {

    const [starredShow, dispatchStarred] = useShows();

    return (
        <FlexGrid>
            {data.map(({ show }) => {
                const isStarred = starredShow.includes(show.id);
                const onStarClick = () => {
                    if (isStarred) {
                        dispatchStarred({ type: 'REMOVE', showId: show.id })
                    }
                    else {
                        dispatchStarred({ type: 'ADD', showId: show.id })
                    }

                }

                return (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : img}
                        summary={show.summary}
                        onStarClick={onStarClick}
                        isStarred={isStarred}
                    />
                );
            })}
        </FlexGrid>
    )
}

export default ShowGrid;
// result.map((item) => <div key={item.show.id}>{item.show.name}</div>)