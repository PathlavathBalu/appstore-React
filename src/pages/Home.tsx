import { IonModal, IonSearchbar, IonThumbnail, IonLabel, IonItem, IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonToggle, IonList, IonItemDivider } from '@ionic/react';
import './Home.css';
import React, { Component, useState, useCallback, useContext } from 'react';
import { NavContext } from '@ionic/react';
import Modal from 'react-modal'
import { IonLoading, IonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import LoadingPage from '../components/LoadingPage';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { navigate } = useContext(NavContext);
  const [loading, setLoading] = useState<boolean>(false);
  const overlayRef = React.useRef<HTMLInputElement>(null)


  // search bar
  const openOverlay1 = () => {
    overlayRef.current?.style.setProperty("display", "block")
    setShowSearchModal(true)

  }

  const closeOverlay1 = () => {
    overlayRef.current?.style.setProperty("display", "none")
    setShowSearchModal(false)
  }

  const openOverlay = () => {
    overlayRef.current?.style.setProperty("display", "block")
    setShowModal(true)

  }

  const closeOverlay = () => {
    overlayRef.current?.style.setProperty("display", "none")
    setShowModal(false)
  }
  function cardClicked() {
    console.log('card clicked...');
    navigate('/category-store');
  }

  function navigateToStore() {
    setShowSearchModal(false);
    setShowModal(false);
    navigate('/store', 'back');
  }
  var City = localStorage.getItem('City');
  //  // Call this function when required to redirect with the back animation
  //  const redirect = useCallback(() => navigate('/store', 'back'), [navigate]);

  return (

    <IonPage>
      <LoadingPage />
      <div className="cust-01-page" ref={overlayRef}>

      </div>
      <ExploreContainer />


      {/* <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      {/* Gray Box Container */}
      <IonContent className="gray-box">
        {/* Search Bar */}
        {/* Green Radius Container */}
        <IonContent>
          <IonContent>
            <IonGrid className="green-box">
              {/* Text 1 */}
              <IonRow className="ion-margin">
                <IonCol size="8">
                  <IonLabel className="title-1">Menampilkan toko terbaik</IonLabel>
                </IonCol>
                <IonCol onClick={openOverlay1} offset="2" >
                  <IonIcon src="./assets/icon/search.svg" color="primary" placeholder="Enter Drop Location" className="search-icon" />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="8">
                  <IonLabel className="title-2">{City}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonButton onClick={() => navigate('/location-manual', 'back')} className="btn-ganti" fill="outline">Ganti</IonButton>

                </IonCol>
              </IonRow>

              {/* 3 Cards */}
              <IonRow>
                <IonCol>
                  <IonCard class="myCard" onClick={() => navigate('/category-store', 'back')} >
                    {/* onClick={()=>navigate('/location-manual', 'back')}  */}
                    <img src="./assets/images/image-1.png" />
                    <div className="myOverlay text-center">
                      <div className="card-title">Pakaian / Aksesoris</div>
                      {/* <div className="card-subtitle">Subtitle</div> */}
                    </div>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard class="myCard" onClick={() => { cardClicked() }} >
                    <img src="./assets/images/image-2.png" />
                    <div className="myOverlay">
                      <div className="card-title">Makanan /
Cemilan</div>
                    </div>
                  </IonCard>
                </IonCol>

                <IonCol>
                  <IonCard class="myCard" onClick={() => { cardClicked() }} >
                    <img src="./assets/images/image-3.png" />
                    <div className="myOverlay">
                      <div className="card-title">Kecantikan /
                      Kosmetik /
Skincare</div>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="gray-border">
                <IonCol className="dki-margin" size="12">
                  <span className="gray-color">Terdapat </span><b className="black-color">31 toko</b> di <span><b>{City}</b></span>

                </IonCol>
              </IonRow>

              {/* Product List */}
              <IonRow>
                <IonCol size="12">
                  <IonItem lines="none" className="action-sheets-basic-page">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>

                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent  >
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>


                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>

                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                  <IonItem lines="none" >
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>

                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>



                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-1.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>

                  <IonItem lines="none">
                    <IonThumbnail className="list-thumbnail" slot="start">
                      <img src="./assets/images/prod-2.png" />
                    </IonThumbnail>
                    <IonContent>
                      <IonLabel className="margin-list item-text1">Kopi Soe, Puri Indah</IonLabel>
                      <IonLabel className="item-text2">Makanan/Cemilan • Minuman/Kop...</IonLabel>
                      <IonLabel className="item-text3">Jl. Muh Yamin No. 6, Serengan, Sura..</IonLabel>
                    </IonContent>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          {/* <ExploreContainer /> */}

          {/* Modal Popup Code Details*/}
          <IonModal isOpen={showModal} cssClass='my-custom-class'>
            <IonContent>
              <IonIcon onClick={closeOverlay} name="close" className="mdlcls"></IonIcon>

              <IonContent text-center className="gray-border-bottom">
                <img className="list-thumbnail display-block" src="assets/images/prod-1.png" width="12" />
                <IonLabel className="margin-list item-text1 display-block">Kopi Soe, Puri Indah</IonLabel>
                <IonLabel className="item-text2 display-block gray-border-bottom">Makanan/Cemilan • Minuman/Kopi Soe, Puri Indah</IonLabel>
                <IonLabel className="margin-list item-text1 display-block">Lokasi Toko</IonLabel>
                <IonLabel className="margin-list item-text1 display-block">Jl. Muh Yamin No. 6, Serengan, Surakarta</IonLabel>
                <IonLabel className="margin-list item-text1 display-block">lorem ipsum</IonLabel>

                <IonButton id="nvgbutton" onClick={() => navigateToStore()} className="display-block btn-modal">Kunjungi Toko</IonButton>

              </IonContent>

            </IonContent>
          </IonModal>

          {/* Modal Search */}
          <IonModal isOpen={showSearchModal} cssClass='home-search-modal'>
            <IonContent>
              <IonIcon onClick={closeOverlay1} name="close" className="mdlcls"></IonIcon>
              {/* Search Bar */}
              <IonSearchbar value='' onIonChange={e => setSearchText(e.detail.value!)} className="search" showCancelButton="focus" placeholder="Cari Toko di DKI JAKARTA">
                <IonButton color="#009688" className="test">Cari</IonButton>
              </IonSearchbar>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonContent>

    </IonPage>
  );
};

export default Home;


