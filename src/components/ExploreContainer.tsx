import { get } from '@ionic-native/core/decorators/common';
import { Geolocation, GeolocationOriginal, Geoposition } from '@ionic-native/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { NavContext } from '@ionic/react';


interface LocationError {
  showError: boolean;
  message?: string;
}

const ExploreContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({ showError: false });
  const [position, setPosition] = useState<Geoposition>();
  const { navigate } = useContext(NavContext);

  var x
  const get = async () => {
    setLoading(true);

    try {
      const position = await Geolocation.getCurrentPosition();
      console.log(Geolocation)
      const latitude = position.coords.latitude
      const longitude = position.coords.latitude
      setPosition(position);
      // setLocation(location)
      setLoading(false);
      // setError({ showError: false });

    } catch (e) {
      setError({ showError: true, message: e.message });
      setLoading(false);
    }
  }
  const getLocation = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  function showPosition(position) {
    x = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    console.log(x)
  }



  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        console.log(error.PERMISSION_DENIED)
        console.log(error.code)
        console.log(x)
        navigate('/location-manual', 'back');
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

  useEffect(() => { getLocation() }, [])

  const loc = (position: any) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude)
    console.log(longitude)
    console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCv72IDKkE-uGh3JzO4CT89lchhP_xf6Ck`)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCv72IDKkE-uGh3JzO4CT89lchhP_xf6Ck`
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        const test = data.results[0].address_components[2].long_name
        console.log(test)
        localStorage.setItem("City", test);
      })
  }

  navigator.geolocation.getCurrentPosition(loc);
  // getLocation();

  return (
    <>
      <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Getting Location...'}
      />
      <IonToast
        isOpen={error.showError}
        onDidDismiss={() => setError({ message: "", showError: false })}
        message={error.message}
        duration={3000}
      />
      {/* <IonButton color="secondary" onClick={getLocation}></IonButton> */}

    </>
  );
};

export default ExploreContainer;