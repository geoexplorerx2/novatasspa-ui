import React, { useEffect, useState } from 'react';

const useLocation = () => {
    const [countryName, setCountryName] = useState(null);
    const [countryCode, setCountryCode] = useState(null)

    async function getLocation() {
        const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=bddf8311bbe94893b126f5a5209020f6");
        const jsonData = await response.json();
        setCountryName(
            jsonData.country_name
        );

        setCountryName(
            jsonData.country_code2
        );
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        countryName,
        countryCode
    };
};

export default useLocation