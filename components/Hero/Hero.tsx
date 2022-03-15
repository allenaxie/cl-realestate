import classes from './Hero.module.scss';
import {ImgCarousel} from '../../components';
import Link from 'next/link';


const Hero = () => {

    const handleClick = () => {
        const location = document.getElementById('about')?.offsetTop;
    
        window.scrollTo({
          left:0,
          top: location - 120,
        })
      };

    return  (
        <div className={classes.container}>
            <ImgCarousel/>
            <div className={classes.contentContainer}>
                <h3 className={classes.slogan}> Your most trusted realtor </h3>
                <button className={classes.cta} onClick={handleClick}>
                        Learn more
                </button>
            </div>

        </div>
    )
}

export default Hero;