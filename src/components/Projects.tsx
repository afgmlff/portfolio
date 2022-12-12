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


      const observer2 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animation');
          }
        });
      }, options);
      
      observer2.observe(document.querySelector('.fadeIn2')!); 
      

})


    return (
    <>

            <IonGrid className="ion-no-padding ion-no-margin copyableText">
                
                <IonRow >
                <IonCol><div className='contentTitle2 margTop weight400 boldT'>Projects & Knowledge<div className="underlineTitle"></div></div></IonCol>
                </IonRow>
        
                <IonRow className="ion-padding fadeIn1 dskmob margTop"> {/* change class name later. */}
                <IonCol className='ion-text-left' size='6'>
                        
                       <a className='' href='https://angular-wordle-maybe.web.app/' target='blank_'><img className='projLeft' src="./assets/wordleGif.gif"></img></a>
                </IonCol>
                <IonCol size='3' offset='-2' className='topElement'>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle><span className='boldT'>wanna be Wordle</span></IonCardTitle>
                            <IonCardSubtitle>a browser words game</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            A project that shares the same logic as "Wordle" (The New York Times). I wanted to learn Angular in practice, but had no creativity at the time.

                        </IonCardContent>

                        <IonCardContent>
                            <a href="https://angular.io/" target="blank_"> <img className="cardIcon" src="./assets/Angular.png"/></a>
                            <a href="https://www.typescriptlang.org/" target="blank_"><img className="cardIcon" src="./assets/Typescript.png"/></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="blank_"><img className="cardIcon" src="./assets/html5-logo.png"/></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank_"><img className="cardIcon" src="./assets/css.png"/></a>
                        </IonCardContent>
                        <IonButton fill="clear" href='https://angular-wordle-maybe.web.app/' target='_blank'>View App</IonButton>
                        <IonButton fill="clear" href='https://github.com/afgmlff/angular-maybe/tree/main/wordle' target='_blank'>Source code</IonButton>
                    </IonCard>
                </IonCol>


               </IonRow>

                <div className='divideProj'/>

               <IonRow className="ion-padding fadeIn2 dskmob margTop"> {/* change class name later. */}
                <IonCol className='ion-text-left' size='6' offset='1'>
                        
                        <a href='.'><img className='projRight' src="./assets/portpoliGif2.gif"></img></a>
                </IonCol>
                <IonCol size='3' offset='-1' className='topElement'>
                <IonCard>
                            <IonCardHeader>
                                <IonCardTitle><span className='boldT'>Portfolio page</span></IonCardTitle>
                                <IonCardSubtitle>a web page with info about me</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>
                                The ideia was to display some of my projects, and also improve my knowledge in ReactJS (and web development in general).

                            </IonCardContent>

                            <IonCardContent>
                                <a href='https://reactjs.org/' target="blank_"><img className="cardIcon" src="./assets/React-icon.svg.png"/></a>
                                <a href="https://www.typescriptlang.org/" target="blank_"><img className="cardIcon" src="./assets/Typescript.png"/></a>
                                <a href='https://ionicframework.com/' target="blank_"><img className="cardIcon" src="./assets/ionic-logo.png"/></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="blank_"><img className="cardIcon" src="./assets/html5-logo.png"/></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank_"><img className="cardIcon" src="./assets/css.png"/></a>
                            </IonCardContent>
                            <IonButton fill="clear" href='' target='_blank'>View App</IonButton>
                            <IonButton fill="clear" href='https://github.com/afgmlff/portfolio' target='_blank'>Source code</IonButton>
                        </IonCard>
                </IonCol>


               </IonRow>


            </IonGrid>
 
    </>
    )
}