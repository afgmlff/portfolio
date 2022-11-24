import React from 'react';
import './Footer.css';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import Home from '../pages/Home';

export const Footer = () => {
    return (
    <>
        <IonContent className="ion-padding">
            <Home />
        </IonContent>
        <IonFooter>
            <IonToolbar>
                <IonTitle class='test'><p>Aécio Fernandes</p></IonTitle>
            </IonToolbar>
        </IonFooter>
    </>
    )
}