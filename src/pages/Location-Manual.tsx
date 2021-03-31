import { IonModal, IonSearchbar, IonThumbnail, IonLabel, IonItem, IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Location-Manual.css';
import React, { useState, useContext } from 'react'
import { validMethods } from 'workbox-routing/utils/constants';
import ExploreContainer from '../components/ExploreContainer';
import LoadingPage from '../components/LoadingPage';
import { NavContext } from '@ionic/react';

const LocationManual: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const { navigate } = useContext(NavContext);
    console.log(searchText);
    const attendence = [
        {
            Name: "Bali",
            Attendence: [
                {
                    date: "2021/12/01",
                    attendence: "Present"
                },
                {
                    date: "2021/12/02",
                    attendence: "Present"
                },
                {
                    date: "2021/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Bangka Belitung",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Present"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Banten",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Bengkulu",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "DI Yogyakarta",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "DKI Jakarta",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Gorontalo",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Gorontalo",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        },
        {
            Name: "Jambi",
            Attendence: [
                {
                    date: "2019/12/01",
                    attendence: "Present"
                },
                {
                    date: "2019/12/02",
                    attendence: "Absent"
                },
                {
                    date: "2019/12/03",
                    attendence: "Present"
                }
            ]
        }
    ];

    const setSearch = function (evt: any) {
        setSearchText(evt.target.value);
        console.log(evt.target.value)

    };

    const setSelectedSearchData = function (ev: any) {
        console.log(ev)
        const selectedsearchdata = ev;
        console.log(selectedsearchdata);
        navigate('/home', 'back');

    }
    return (

        <IonPage>
            <LoadingPage />

            {/* <IonHeader>
                <IonToolbar>
                    <IonTitle>Location Search</IonTitle>
                </IonToolbar>
            </IonHeader> */}

            {/* Gray Box Container */}
            <IonContent className="gray-box">

                {/* Green Radius Container */}
                <IonContent>
                    <IonContent>
                        <IonGrid className="green-box">
                            {/* Text 1 */}
                            <IonRow className="ion-location-margin">
                                <IonCol size="12">
                                    <IonLabel className="title-1">Cari Provinsi Anda</IonLabel>
                                </IonCol>
                            </IonRow>
                            <IonSearchbar showCancelButton="focus" onIonChange={setSearch} placeholder="Cari provinsi Anda disini" className="location" color="black"></IonSearchbar>
                            {/* value="" */}

                            <IonRow className="ion-location-margin">
                                <IonCol size="12">
                                    <IonLabel className="title-1">Atau pilih provinsi yang terdaftar</IonLabel>
                                </IonCol>
                            </IonRow>
                            <ExploreContainer />

                            {/* Product List */}
                            {attendence.filter((val) => {
                                if (searchText == "") {
                                    return val
                                }
                                else if (val.Name.toLowerCase().includes(searchText.toLowerCase())) {
                                    return val
                                }
                            }).map((val,i) => {
                                return (
                                    <IonRow id="myUL" key={i}>
                                        <IonCol size="12" className="border-radius-10">

                                            <IonItem className="no-spacing" lines="none">
                                                <IonThumbnail className="location-thumbnail" slot="start">
                                                    <img className="location-style" src="./assets/icon/location-icon.png" />
                                                </IonThumbnail>
                                                <IonContent>
                                                    <IonLabel className="margin-list " onClick={() => setSelectedSearchData(val.Name)}>{val.Name}</IonLabel>
                                                </IonContent>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>

                                )
                            })}
                        </IonGrid>
                    </IonContent>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default LocationManual;

