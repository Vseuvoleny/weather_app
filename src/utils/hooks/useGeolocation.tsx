import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [geolocation, setGeolocation] =
    useState<string | GeolocationPosition>("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation(position);
    });
  }, []);
  return geolocation;
};

export default useGeolocation;
