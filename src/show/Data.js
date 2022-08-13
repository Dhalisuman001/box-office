import React from 'react'
import { DetailsWrapper } from './DataStyled';

const Data = ({ status, premiered, network }) => {
    return (
        <DetailsWrapper>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </DetailsWrapper>
    );
};


export default Data;