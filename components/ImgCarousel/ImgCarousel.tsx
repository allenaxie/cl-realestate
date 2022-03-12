import classes from './ImgCarousel.module.scss';
import Carousel from 'react-material-ui-carousel';

const ImgCarousel = () => {

    var images = [
        {
            name: 'photo-1',
            url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

        },
        {
            name: 'photo-2',
            url: 'https://i.imgur.com/FmV4NCi.jpg',
        },
        {
            name: 'photo-3',
            url: 'https://i.imgur.com/LAXBE1N.jpg',
        }
    ]

    return (
        <Carousel 
        className={classes.carousel}
        autoPlay
        >
            {
                images.map( (image ) => <img className={classes.photo} src={image.url} />)
            }
        </Carousel>
    )
}

export default ImgCarousel;