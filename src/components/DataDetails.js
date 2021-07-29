import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedData } from '../redux/actions/dataAction';
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    makeStyles,
    IconButton,
    Button,
} from "@material-ui/core";
import { Close } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: '4px'
        }
    },
}));

const DataDetails = (props) => {
    const dispatch = useDispatch();
    console.log(props.data)

    useEffect(() => {
        dispatch(selectedData(props.data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classes = useStyle();
    return (
        <Dialog open={!!Object.keys(props.data).length} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <IconButton onClick={props.closeModal} >
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Name: </Typography>
                        <Typography variant='body2'>
                            {props.data.name && props.data.name.first} {props.data.name && props.data.name.middle} {props.data.name && props.data.name.last}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Age:</Typography>
                        <Typography variant='body2'>
                            {props.data.age}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Gender:</Typography>
                        <Typography variant='body2'>
                            {props.data.gender}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Home Planet:</Typography>
                        <Typography variant='body2'>
                            {props.data.homePlanet}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Occupation:</Typography>
                        <Typography variant='body2'>
                            {props.data.occupation}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Species:</Typography>
                        <Typography variant='body2'>
                            {props.data.species}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Saying:</Typography>
                        <Typography variant='body2'>
                            {props.data.sayings}
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeModal} variant='outlined'>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DataDetails;
