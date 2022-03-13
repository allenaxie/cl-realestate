import classes from './ContactForm.module.scss';
import { useForm, ValidationError } from '@formspree/react';
import {TextField, Typography, Snackbar} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


const ContactForm = () => {
    const [open, setOpen] = useState(false);

    function handleClose () {
        setOpen(false);
    }

    const [state, handleSubmit] = useForm("mdobdoon");
    if (state.succeeded) {
        setOpen(true);
    }

    useEffect(() => {
        // all animations will take 2 seconds to complete
        Aos.init({ duration: 2000 });
    },[])

    return (
        <>
            <Typography className={classes.heading} data-aos="fade">Contact Me</Typography>
            <form onSubmit={handleSubmit} className={classes.form} data-aos="fade-up">
                <TextField
                label="Name"
                name="name"
                type="name"
                required
                className={classes.name}
                />
                <TextField 
                label="Email"
                name="email"
                type="email"
                required 
                className={classes.email}
                />
                <TextField
                label="Message"
                name="message"
                type="message"
                multiline
                required
                className={classes.message}
                />
                <button type="submit" disabled={state.submitting} value="Submit" className={classes.submitBtn}>
                    Submit
                </button>
            </form>
            <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Message sent successfully!"
            />
        </>

    )
}

export default ContactForm;