import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';


const Show = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        getApi(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result => {
            setShow(result);

        })

    }, [id])
    console.log("show", show);

    return (
        <div> This is Show page</div>
    )
}

export default Show