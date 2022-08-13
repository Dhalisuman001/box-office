import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';


const Show = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true;
        getApi(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result => {
            if (isMounted) {
                setShow(result);
                setIsLoading(false);
            }

        }).catch(err => {
            setError(err.message);
            setIsLoading(false);
        })

        return () => {
            isMounted = false;
        };

    }, [id])
    console.log("show", show);

    if (isLoading) {
        return <div>Data is being loading</div>
    }
    if (error) {
        return <div>Error occured</div>
    }
    return <div>This is show pages</div>
}

export default Show