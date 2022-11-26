import React from 'react';
import './Footer.css';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';

export const Footer = () => {
    return (
    <>
        <IonFooter>
            <p className='copyr'>© 2022 Aécio Fernandes</p>
        </IonFooter>
    </>
    )
}