import classes from './Hero.module.scss';
import {ImgCarousel} from '../../components';


const Hero = () => {
    return  (
        <div className={classes.container}>
            <ImgCarousel/>
            <div className={classes.text}>
                <h3 className={classes.slogan}> Your most trusted realtor </h3>
            </div>
            <div className={classes.button}>
                <button className={classes.cta}>Get started today!</button>
            </div>

        </div>
    )
}

export default Hero;