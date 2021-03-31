import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonLoading, IonButton, useIonViewWillEnter } from '@ionic/react';
import '../components/LoadingPage.css';


const LoadingPage = () => {

  const [showLoading, setShowLoading] = useState(false);

  const loadProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  useIonViewWillEnter(() => {
    setShowLoading(true);
    loadProducts().then(() => {
      setShowLoading(false);
    })
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading Sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
        <IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
          duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoadingPage;
