import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import {Navbar, Hero, Stats, About, PropertyList, ReviewList, ContactForm, Footer} from '../components';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import {Snackbar} from '@mui/material';


const Home: NextPage = () => {

  const [open, setOpen] = useState(false);

    function handleClose () {
        setOpen(false);
    }

    const [state, handleSubmit] = useForm("mdobdoon");
    if (state.succeeded) {
        console.log('Form submitted successfully!')
    }
  
    function openNotification () {
      setOpen(true);
    }

  return (
    <div className={classes.container}>
      <Head>
        <title>CL Real Estate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.navbar} >
        <Navbar/>
      </header>
      <main className={classes.main} id="home">
        <section className={classes.heroSection} >
          <Hero/>
        </section>
        <section className={classes.statsSection}>
          <Stats/>
        </section>
        <section className={classes.aboutSection} id="about">
          <About/>
        </section>
        <section className={classes.propertiesSection} id="properties"> 
          <PropertyList/>
        </section>
        <section className={classes.reviewsSection} id="reviews">
          <ReviewList/>
        </section>
        <section className={classes.contactSection} id="contact">
          <ContactForm handleSubmit={handleSubmit} openNotification={openNotification}/>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Message sent successfully!"
          />
        </section>   
      </main>
      <footer className={classes.footerSection}>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
