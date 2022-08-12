import React from 'react'
import ShowCard from './ShowCard';
import img from '../asset/not-found.png';
import { FlexGrid } from '../components/Styled';
const ShowGrid = ({ data }) => {
    return (
        <FlexGrid>
            {data.map(({ show }) => (
                <ShowCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : img}
                    summary={show.summary}
                />
            ))}
        </FlexGrid>
    )
}

export default ShowGrid;
// result.map((item) => <div key={item.show.id}>{item.show.name}</div>)