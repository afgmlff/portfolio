import React, { useEffect } from 'react';
import './Contact.css';
import { createAnimation, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const Contact = () => {
    
useEffect(() => {

    let options = {
        root: null,
        rootMargin: "-10%",
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

            <IonGrid className="ion-no-padding ion-no-margin copyableText">
                <IonRow >
                <IonCol><div className='contentTitle2 margTop'>Contact me<div className="underlineTitle"></div></div></IonCol>
                </IonRow>
        
                <IonRow className="ion-padding contentTitle dskmob margTop fadeIn3"> {/* change class name later. */}
                    <IonCol className='ion-justify-content-center'>
                        <a className='contactGhub' href='https://github.com/afgmlff' target='blank_'><img className='contactGhub'></img></a>
                    </IonCol>

                    <IonCol className='ion-justify-content-center'>
                        <img className='aboutIcon' src="./assets/icon/me.png"></img>
                    </IonCol>
                </IonRow>
            </IonGrid>
 
    </>
    )
}