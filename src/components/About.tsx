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

            <IonGrid className="ion-no-padding ion-no-margin copyableText">
                <IonRow class="ion-no-margin"><div className='transitionDiv'></div></IonRow>
                <IonRow>
                <IonCol><p className='contentTitle'><span className="meColor">A</span>bout</p></IonCol>
                </IonRow>
                <IonRow class="ion-padding">
                    <IonCol>
                        <p className='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </IonCol>
                    <IonCol>
                        <img className='aboutIcon' src="./assets/icon/me.png"></img>
                    </IonCol>
                </IonRow>
            </IonGrid>
 
    </>
    )
}