import { IonModal, IonSearchbar, IonThumbnail, IonLabel, IonItem, IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Store-Home.css';
import React, { useState } from 'react'
// import ExploreContainer from '../components/ExploreContainer';

const Store: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  function cardClicked() {
    console.log('card clicked...');
  }

  return (
    <IonPage>
      {/* <IonHeader >
        <IonToolbar className="toolbar-container">
          <IonTitle > Dibaut Dengan tokoko</IonTitle>
          <IonButton className="store1-btn-modal">Buat toko online</IonButton>

        </IonToolbar>
      </IonHeader> */}

      {/* Gray Box Container */}
      <IonContent className="gray-box">
      {/* Search Bar */}
      {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar> */}

        {/* Green Radius Container */}
        <IonContent>
          <IonContent>
            <IonGrid >

            <IonRow>
                <IonCol className="dki-margin" size="12">
                    <IonItem lines="none" className="no-bottom-border">
                        <IonThumbnail className="list-thumbnail" slot="start">
                        <img src="./assets/images/store-1.png" />
                        </IonThumbnail>
                        <IonContent>
                        <IonLabel className="margin-list item-text1">Fashion Watch Home</IonLabel>
                        <IonLabel className="store-text2">Informasi Toko</IonLabel>
                        </IonContent>
                    </IonItem>
                </IonCol>
              </IonRow>      

                <IonRow className="gray-border-top">
                    <IonCol>
                        {/* Search Bar */}
                        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
                    </IonCol>
                </IonRow>

              <IonRow className="gray-border">
                <IonCol className="dki-margin" size="12">
                  <span className="black-color"><strong>Smart Watch</strong> <span className="gray-color">8 produk</span> </span>
                </IonCol>
              </IonRow>

              {/* Product List */}
              <IonRow>
                
                <IonCol size="">

                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/store-prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">I2 Smart watches bluetooth sports jam tangan pria heart rate monitor - Putih</IonLabel>
                      <IonLabel className="item-text2"><strong>Rp300.000 </strong><span className="gray-color">per<strong className="black-color"> 1 pcs</strong></span> </IonLabel>
                      <IonButton className="store-btn-modal">+ Keranjang</IonButton>
                    </IonContent>
                  </IonItem>

                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/store-prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                    <IonLabel className="margin-list item-text1">I2 Smart watches bluetooth sports jam tangan pria heart rate monitor - Putih</IonLabel>
                      <IonLabel className="item-text2"><strong>Rp300.000 </strong><span className="gray-color">per<strong className="black-color"> 1 pcs</strong></span> </IonLabel>
                      <IonButton className="store-btn-modal">+ Keranjang</IonButton>
                    </IonContent>
                  </IonItem>

                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          {/* <ExploreContainer /> */}
           
    
        </IonContent>
      </IonContent>

    </IonPage>
  );
};

export default Store;