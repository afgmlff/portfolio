import React, { useEffect } from 'react';
import './Contact.css';
import { createAnimation, IonCardContent, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const Contact = () => {
    
useEffect(() => {

    let options = {
        root: null,
        rootMargin: "-5%",
      };
    
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animation');
          }
        });
      }, options);
      
      observer.observe(document.querySelector('.fadeIn3')!);

})


    return (
    <>

            <IonGrid className="ion-no-padding ion-no-margin copyableText reduceGrid">
                <IonRow >
                <IonCol><div className='contentTitle2 margTop'>Contact me<div className="underlineTitle"></div></div></IonCol>
                </IonRow>

                <IonCardContent className=' ion-padding center  margTop fadeIn3 '>
                    <a className='contactGhub ' href='https://github.com/afgmlff' target='blank_'><img className='contactGhub'></img></a>
                    <a className='contactMail' href="mailto:aeciofgm2@gmail.com"><img className='contactMail'></img></a>
                    <a className='contactLkd' href="https://www.linkedin.com/in/a%C3%A9cio-fernandes-29352a193/" target='blank_'><img className='contactLkd'></img></a>
                </IonCardContent>
                <div className='foot'><p className='footText'>© 2022 Aécio Fernandes</p></div>
            </IonGrid>
        
    </>
    )
}