import classes from './About.module.scss';

const About = () => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>

            </div>
            <div className={classes.col2}>
                <img className={classes.profileImg} src="images/profile-pic.jpeg" />
            </div>
        </div>
    )
}

export default About;