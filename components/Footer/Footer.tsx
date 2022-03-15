import classes from './Footer.module.scss';
import {Grid} from '@mui/material';
import { LinkedIn, Phone, Facebook, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={4} className={classes.logo}>
                <span className={classes.logoContent}>
                    LOGO
                </span>
            </Grid>
            <Grid item xs={4} className={classes.socialMedia}>
                <LinkedIn className={classes.linkedinIcon}/>
                <Facebook className={classes.facebookIcon}/>
            </Grid>
            <Grid item xs={4} className={classes.contact}>
                <div className={classes.phoneContainer}>
                    <Phone className={classes.phoneIcon}/> 
                    <span className={classes.phone}>1 (415) 999-9999</span>
                </div>
                <div className={classes.emailContainer}>
                    <Email className={classes.emailIcon}/>
                    <span className={classes.email}>
                        calvinluo@gmail.com
                    </span>
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer;