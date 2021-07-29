import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setDatas } from '../redux/actions/dataAction';
import { Container, CircularProgress } from "@material-ui/core";
import DataComponent from './DataComponent';

const DataList = () => {
    const [isloading, setIsLoading] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        setIsLoading(true);
        const fetchDatas = async () => {
            const response = await axios
                .get('https://api.sampleapis.com/futurama/characters')
                .catch((err) => {
                    console.log('Error', err);
                });
            console.log(response.data);
            dispatch(setDatas(response.data));
            setIsLoading(false);
        };
        fetchDatas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getChildData = (user) => {

    };

    const loading = () => {
        if (isloading) {
            return <CircularProgress />
        }
        return <DataComponent emitChildData={getChildData} />
    };

    return (
        <Container>
            {loading()}
        </Container>
    )
}

export default DataList;
