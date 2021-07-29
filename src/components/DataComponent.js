import React from 'react';
import { useSelector } from 'react-redux';
import classes from './DataComponent.module.css';



const DataComponent = (props) => {
    const datas = useSelector((state) => state.allDatas.datas);
    // console.log(datas);

    const openCard = (data) => {
        props.emitChildData(data);
    };

    return (
        <>
            {
                datas.map((data) => {
                    return (
                        <div className={classes['card-list']} key={data.id}>
                            <div className={classes.card} onClick={() => openCard(data)}>
                                <div className={classes['users-details']} >
                                    <div className={classes.images}>
                                        <img src={data.images && data.images.main} alt='No Pic' />
                                    </div>
                                    <span className={classes['user-names']}>{data.name && data.name.first} {data.name && data.name.middle} {data.name && data.name.last}</span>
                                    <span className={classes.email}></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DataComponent;


// <Grid item xs={6}>
//     <Card className={classes.root} variant="outlined" key={data.id}>
//         <CardContent>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//                 {data.name && data.name.first} {data.name && data.name.middle} {data.name && data.name.last}
//             </Typography>
//             <Typography variant="h5" component="h2">

//             </Typography>
//             <Typography className={classes.pos} color="textSecondary">

//             </Typography>
//             <Typography variant="body2" component="p">


//             </Typography>
//         </CardContent>

//     </Card>
// </Grid>