import classes from './ContactForm.module.scss';
import { useForm, ValidationError } from '@formspree/react';
import {TextField, Typography} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdobdoon");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


    return (
        <>
            <Typography className={classes.heading}>Contact Me</Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                label="Name"
                required
                className={classes.name}
                />
                <TextField 
                label="Email"
                required 
                className={classes.email}
                />
                <TextField
                label="Message"
                multiline
                required
                className={classes.message}
                />
                <div className={classes.btnContainer}>
                    <button type="submit" disabled={state.submitting} className={classes.submitBtn}>
                        Submit
                    </button>
                </div>
            </form>
        </>

    )
}

export default ContactForm;