import React, { useEffect } from 'react';
import './About.css';
import { createAnimation, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const About = () => {
    
useEffect(() => {

    let options = {
        root: null,
        rootMargin: "-30%",
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
      
      observer.observe(document.querySelector('.contentTitle')!);

})


    return (
    <>
        <IonContent className="ion-no-padding ion-no-margin copyableText" forceOverscroll={false}>
            <IonGrid className="ion-no-padding ion-no-margin">
                <IonRow class="ion-no-margin"><div className='transitionDiv'></div></IonRow>
                <IonRow>
                <IonCol><p className='contentTitle'>About</p></IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </>
    )
}