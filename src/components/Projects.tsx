import React, { useEffect } from 'react';
import './Projects.css';
import { createAnimation, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const Projects = () => {
    
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
      
      observer.observe(document.querySelector('.fadeIn1')!); 
      

})


    return (
    <>

            <IonGrid className="ion-no-padding ion-no-margin copyableText">
                
                <IonRow >
                <IonCol><div className='contentTitle2 margTop'>Projects & Knowledge<div className="underlineTitle"></div></div></IonCol>
                </IonRow>
        
                <IonRow className="ion-padding fadeIn1 dskmob margTop"> {/* change class name later. */}
                    <IonCol>
                        <div className='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </IonCol>
                    <IonCol className='ion-justify-content-center'>
                        <img className='aboutIcon' src="./assets/wordle-mv.gif"></img>
                    </IonCol>
                </IonRow>
            </IonGrid>
 
    </>
    )
}