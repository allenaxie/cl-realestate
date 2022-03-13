import classes from './ReviewListItem.module.scss';
import { Rating, Grid, Button, CardActionArea, CardActions, Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface ReviewListItemProps {
    review: any
}

const ReviewListItem = (props:ReviewListItemProps) => {

    useEffect(() => {
        // all animations will take 2 seconds to complete
        Aos.init({ duration: 2000 });
    },[])

    return (    
        <Card className={classes.card} data-aos="flip-up">
            <Grid container spacing={{xs:1}} columns={{xs:8}}>
                <Grid item xs={3} className={classes.avatarContainer}>
                    <Avatar 
                    src={props.review.image}
                    alt="profile image"
                    className={classes.avatar}
                    />
                </Grid>
                <Grid item xs={5} className={classes.contentContainer}>
                    <CardContent className={classes.content}>
                        <span className={classes.name}>
                            {props.review.name}
                        </span>
                        <div className={classes.rating}>
                            <Rating
                            name={`${props.review.name}'s rating`}
                            value={props.review.rating}
                            readOnly
                            size="large"
                            />
                            
                        </div>
                        <p className={classes.comment}>
                            {props.review.comment}
                        </p>

                    </CardContent>

                </Grid>
            </Grid>
        </Card>
    )
}

export default ReviewListItem;