import React, { createContext, useContext,useState,useEffect } from 'react';

const PropertiesContext = createContext();

export const useProperties = () => useContext(PropertiesContext);

export const PropertiesProvider = ({ children }) => {

    const [properties, setProperties] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch('https://mapiles-listing-dashboard.vercel.app/api/listing/type?type=rto');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setProperties(result)
        } catch {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PropertiesContext.Provider value={{ properties }}>
            {children}
        </PropertiesContext.Provider>
    );
};
