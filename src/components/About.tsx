import React from 'react';
import './About.css';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const About = () => {
    return (
    <>
        <IonContent className="ion-padding" forceOverscroll={false}>
            <IonGrid>
                <IonRow>
                <IonCol><p className=''>About</p></IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </>
    )
}