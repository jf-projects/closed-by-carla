import React, { useState } from 'react';
import { useBrokerage } from '../Context/BrokerageContext/BrokerageContext';
import HtmlToPdf from '../DownloadDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailModal from '../EmailInquiry';
const BrokerageList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { properties } = useBrokerage();
    const [selectedProperty, setSelectedProperty] = useState(null);
    if (!properties) return <p>Loading properties...</p>;


    const handleOpenModal = (property) => {
        setIsModalOpen(true); // Show the modal
        setSelectedProperty(property);
    };
    const handleSendEmail = (email, message, name, number) => {
        const emailData = {
            email: email,
            subject: `Inquiry for ${selectedProperty.id} : ${selectedProperty.name}`,
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
        console.log(property.images)
        if (property) {
            setSelectedProperty(property);
            document.getElementById('carousel_modalx').showModal();
        }
    };

    const closeModal = () => {
        document.getElementById('carousel_modalx').close();
        setSelectedProperty(null);
    };

    return (

        <div className='pt-[5rem] pb-[10rem]' id="brokerage-section">
            <h1 className="text-center text-5xl text-heading mb-6">Property Inventory</h1>
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
                            <div className="flex justify-between items-center">
                                <h2 className="card-title">
                                    {property.name}
                                </h2>

                                <div className='flex space-x-2'>
                                    <div className='py-[1px]'>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            title='Send Inquiry'
                                            className='cursor-pointer text-gray-400'
                                            onClick={() => handleOpenModal(property)}
                                        />
                                    </div>
                                    <HtmlToPdf property={property} />
                                </div>
                            </div>


                            <p><span className='font-semibold'>Location: </span> {property.location}</p>
                            <p>
                                <span className="font-semibold">Price: </span>
                                {new Intl.NumberFormat('en-PH', {
                                    style: 'currency',
                                    currency: 'PHP',
                                }).format(property.price)}
                            </p>
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

            <dialog id="carousel_modalx" className="modal">
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

            <EmailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSend={handleSendEmail}
            />
        </div>
    );
};

export default BrokerageList;
