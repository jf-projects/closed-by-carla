import React, { createContext, useContext, useEffect, useState } from 'react';

const BrokerageContext = createContext();

export const useBrokerage = () => useContext(BrokerageContext);

export const BrokerageProvider = ({ children }) => {
    const [properties, setProperties] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch('https://mapiles-listing-dashboard.vercel.app/api/listing/test?type=brokerage');

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
        <BrokerageContext.Provider value={{ properties }}>
            {children}
        </BrokerageContext.Provider>
    );
};
