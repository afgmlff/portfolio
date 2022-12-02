import React from 'react';
import './Footer.css';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Home from '../pages/Home';
import { Waypoint } from 'react-waypoint';

export const Footer = () => {
    return (
    <>


            <IonGrid>
            <p className='teste'>© 2022 Aécio Fernandes</p>
            </IonGrid>
    </>
    )
}