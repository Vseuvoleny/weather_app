import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [geolocation, setGeolocation] =
    useState<undefined | GeolocationCoordinates>(undefined);
  useEffect(() => {
    if (!geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocation(position.coords);
      });
    }
  }, []);
  return geolocation;
};

export default useGeolocation;
