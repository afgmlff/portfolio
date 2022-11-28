import React, { useEffect } from 'react';
import './Projects.css';
import { createAnimation, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
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
                <IonCol className='ion-text-left' size='6'>
                        
                        <img className='projLeft' src="./assets/wordleGif.gif"></img>
                </IonCol>
                <IonCol size='3' offset='-2'>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle><span className='boldT'>wanna be Wordle</span></IonCardTitle>
                            <IonCardSubtitle>a browser words game</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            A project that shares the same logic as "Wordle" (The New York Times). I wanted to learn Angular in practice, but had no creativity at the time.

                        </IonCardContent>

                        <IonCardContent>
                            <img className="cardIcon" src="./assets/Angular.png"/>
                            <img className="cardIcon" src="./assets/Typescript.png"/>
                            <img className="cardIcon" src="./assets/html5-logo.png"/>
                            <img className="cardIcon" src="./assets/css.png"/>
                        </IonCardContent>
                        <IonButton fill="clear" href='https://angular-wordle-maybe.web.app/' target='_blank'>View App</IonButton>
                        <IonButton fill="clear" href='https://github.com/afgmlff/angular-maybe/tree/main/wordle' target='_blank'>Source code</IonButton>
                    </IonCard>
                </IonCol>


                </IonRow>
            </IonGrid>
 
    </>
    )
}