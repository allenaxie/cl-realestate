import classes from './ReviewListItem.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';


interface ReviewListItemProps {
    review: any
}

const ReviewListItem = (props:ReviewListItemProps) => {
    return (
        <Card className={classes.card}>
        {props.review.name}
        {props.review.rating}
        {props.review.comment}
        </Card>
    )
}

export default ReviewListItem;