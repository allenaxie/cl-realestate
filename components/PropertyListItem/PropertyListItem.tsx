import classes from './PropertyListItem.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

interface PropertyListItemProps {
    property:any
}

interface CardProps {
    component:string
    height:string
    image:string
    alt:string
}

const PropertyListItem = (props: PropertyListItemProps) => {

    return (
    <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
            <Typography className={classes.price} gutterBottom variant="h5">{props.property.price}</Typography>
            <CardMedia
            component='img'
            height='140'
            image={props.property.images.img1}
            alt='img 1'
            className={classes.img}
            />
            <CardContent>
                <Typography className={classes.address} component="div" variant="h5" gutterBottom>
                    {props.property.address}
                </Typography>
                <Typography className={classes.description}>
                    {props.property.description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}

export default PropertyListItem;
