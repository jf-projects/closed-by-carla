import React, { useState } from 'react';
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import MapComponent from '../Map';
import { useProperties } from '../Context/PropertyContext/PropertyContext';

AOS.init();

const Cards = () => {

    const { properties } = useProperties();
    const [selectedProperty, setSelectedProperty] = useState(null);
    if (!properties) return <p>Loading properties...</p>; 

    const handleCarouselClick = (prop_name) => {
        const property = properties.find((prop) => prop.name === prop_name);
        if (property) {
            setSelectedProperty(property);
            document.getElementById('carousel_modal').showModal();
        }
    };

    const closeModal = () => {
        document.getElementById('carousel_modal').close();
        setSelectedProperty(null);
    };

    const handleMapClick = (prop_name) => {
        const property = properties.find((prop) => prop.name === prop_name);
        if (property) {
            setSelectedProperty(property);
            document.getElementById('map_modal').showModal();
        }
    };

    const closeMapModal = () => {
        document.getElementById('map_modal').close();
        setSelectedProperty(null);
    };

    return (
        <>
            <div className='pt-[5rem] pb-[10rem]' id="property-section">
                <h1 className="text-center text-5xl text-heading mb-6">Rent-to-Own Real Estate</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {properties && properties.map((property, index) => (

                        <div
                            key={index}
                            className="card bg-base-100 w-full shadow-xl"
                        >
                            <figure className="img-hover-container">
                                <img className='h-[14rem] cursor-pointer'
                                    src={property.images[0]}
                                    alt={property.name}
                                    onClick={() => handleCarouselClick(property.name)}
                                />
                            </figure>
                            <div className="py-5 px-5 space-y-2">
                                <h2 className="card-title">
                                    {property.name}
                                    <svg className="cursor-pointer compass"
                                        width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => handleMapClick(property.name)}
                                    >
                                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                                        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                                    </svg>
                                </h2>
                                <p>{property.location}</p>
                                <div className='space-y-2'>
                                    <div>
                                        <p className='font-semibold'>Payment Options:</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        {property.paymentTerms.map((info, index) => (
                                            <div className="badge badge-success badge-outline" key={index}>{info}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Features:</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        {property.features.map((info, index) => (
                                            <div className="badge badge-outline" key={index}>{info}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <dialog id="carousel_modal" className="modal">
                    <div className="modal-box w-full max-w-7xl">
                        <div className="carousel w-full">
                            {selectedProperty && selectedProperty.images.map((picture, index) => (
                                <div id={`Property${index}`} className="carousel-item relative w-full flex items-center justify-center" key={index}>
                                    <img
                                        src={picture}
                                        className="w-auto max-h-[40rem]"
                                        alt={index} />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href={`#Property${index - 1}`} className="btn btn-circle">❮</a>
                                        <a href={`#Property${index + 1}`} className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={closeModal}>Close</button>
                    </form>
                </dialog>

                <dialog id="map_modal" className="modal">
                    <div className="modal-box w-full max-w-7xl">
                        {selectedProperty ? (
                            <MapComponent locationName={selectedProperty.name} />
                        ) : (
                            <p>Loading map...</p> // Optional: display a loading message or placeholder
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={closeMapModal}>Close</button>
                    </form>
                </dialog>
                <div className="divider"></div>

            </div>
        </>
    );
}

export default Cards;
