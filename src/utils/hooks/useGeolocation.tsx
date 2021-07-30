import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [geolocation, setGeolocation] =
    useState<string | GeolocationCoordinates>("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation(position.coords);
    });
  }, []);
  return geolocation;
};

export default useGeolocation;
