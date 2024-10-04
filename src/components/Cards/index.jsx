import React, { useState } from 'react';
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import MapComponent from '../Map';
import { useProperties } from '../Context/PropertyContext/PropertyContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import EmailModal from '../EmailInquiry';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import HtmlToPdf from '../DownloadDetails';

AOS.init();

const Cards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { properties } = useProperties();
    const [selectedProperty, setSelectedProperty] = useState(null);
    if (!properties) return <p>Loading properties...</p>;

    const handleOpenModal = (property) => {
        setIsModalOpen(true); // Show the modal
        setSelectedProperty(property);
    };
    const handleSendEmail = (email, message, name, number) => {
        const emailData = {
            email: email,
            subject: `Inquiry for ${selectedProperty.name}`,
            message: message,
            number: number,
            name: name
        };

        emailjs
            .send('service_zibsm3m', 'template_ebugnxe', emailData, 'EIZ5W28_Zxwvclt97')
            .then(
                () => {
                    toast.success('Inquiry successfully sent!');
                },
                (e) => {
                    toast.error('Failed to send the message, please try again!');
                }
            ).finally(() => {
            });

    };

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
                                <img
                                    className="h-[14rem] cursor-pointer"
                                    src={property.images[0]}
                                    alt={property.name}
                                    onClick={() => handleCarouselClick(property.name)}
                                />

                                {/* <div className="z-10 absolute top-5 left-0 transform -translate-y-1/2 translate-x-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-r-lg">
                                    Brand New
                                </div> */}
                            </figure>
                            <div className="py-5 px-5 space-y-2">
                                <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold uppercase">
                                        {property.name}
                                    </h2>

                                    <div className='flex space-x-2'>
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            title='See Map'
                                            className='cursor-pointer text-red-400'
                                            onClick={() => handleMapClick(property.name)}
                                        />

                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            title='Send Inquiry'
                                            className='cursor-pointer text-gray-400'
                                            onClick={() => handleOpenModal(property)}
                                        />
                                    </div>
                                </div>
                                <p>{property.location}</p>

                                <div className='space-y-2'>
                                    <div>
                                        <p className='font-semibold text-sm'>Payment Options:</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 text-sm">
                                        {property.paymentTerms.map((info, index) => (
                                            <div className="badge badge-success badge-outline" key={index}>{info}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Features:</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 text-sm">
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

            <EmailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSend={handleSendEmail}
            />
        </>
    );
}

export default Cards;
