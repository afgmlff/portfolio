import React, { useEffect } from 'react';
import './About.css';
import { createAnimation, IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const About = () => {
    
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
      
      observer.observe(document.querySelector('.contentTitle')!);

})


const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('SamplePDF.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'curriculum.pdf';
          alink.click();
      })
  })
}


    return (
    <>

            <IonGrid className="ion-no-padding ion-no-margin copyableText">
                <IonRow class="ion-no-margin"><div className='transitionDiv'></div></IonRow>
                <IonRow >
                <IonCol><div className='contentTitle2 weight400 boldT'>About<div className="underlineTitle"></div></div></IonCol>
                </IonRow>
        
                <IonRow className="ion-padding contentTitle dskmob margTop"> {/* change class name later. */}
                    <IonCol>
                        <div className='aboutText'>After majoring in Computer Engineering, my enthusiasm for Web development grew fondly, 
                        especially in front-end development. I have worked with plain HTML, CSS and Javascript for a few years, 
                        and started learning new technologies such as Angular and ReactJS through some personal projects. 
                        <br/>Besides programming, I enjoy drawing, writing and playing piano.<br/><br/>
                        <button className='button2'>
                            <span className='button_lg2'>
                                <span className="button_sl2"></span>
                                <a className='aDownload' href='/curriculum.pdf' download>
                                <span className="button_text2">Download my CV</span></a>
                            </span>
                        </button>

                        </div>

                    </IonCol>
                    <IonCol className='ion-justify-content-center'>
                        <img className='aboutIcon' src="./assets/icon/me.png"></img>
                    </IonCol>
                </IonRow>
            </IonGrid>
 
    </>
    )
}