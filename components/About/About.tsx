import classes from './About.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        // all animations will take 2 seconds to complete
        Aos.init({ duration: 2000 });
    },[])

    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <div className={classes.textContainer} data-aos="fade-right" >
                    <span className={classes.primarytext}>
                        About Me
                    </span>
                    <span className={classes.subtext}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem, obcaecati magnam quos optio ullam ipsam, consectetur eius blanditiis quaerat quo laudantium reiciendis? Deleniti rem aperiam laudantium voluptas labore animi.
                    </span>
                </div>
                <div data-aos="fade-up" className={classes.ctaContainer}>
                    <button className={classes.cta}>Connect with me</button>
                </div>
            </div>
            <div className={classes.col2}>
                <div className={classes.imgContainer} data-aos="fade-left">
                    <img className={classes.profileImg} src="images/profile-pic.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default About;