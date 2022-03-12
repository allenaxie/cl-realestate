import classes from './About.module.scss';

const About = () => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <span className={classes.primarytext}>
                    About Me
                </span>
                <span className={classes.subtext}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem, obcaecati magnam quos optio ullam ipsam, consectetur eius blanditiis quaerat quo laudantium reiciendis? Deleniti rem aperiam laudantium voluptas labore animi.
                </span>
                <button className={classes.cta}>Connect with me</button>
            </div>
            <div className={classes.col2}>
                <img className={classes.profileImg} src="images/profile-pic.jpeg" />
            </div>
        </div>
    )
}

export default About;