import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

const HtmlToPdf = ({ property }) => {
    const printRef = useRef();
    const [isContentVisible, setContentVisible] = useState(false); // State to manage content visibility

    const handleDownloadPdf = async () => {
        // Set content visibility to true when downloading
        setContentVisible(true);

        const element = printRef.current;

        // Ensure images are fully loaded before generating the canvas
        const images = element.querySelectorAll('img');
        const promises = Array.from(images).map((img) => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = img.onerror = resolve;
                }
            });
        });

        // Wait for all images to load
        await Promise.all(promises);

        // Create a new jsPDF instance
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16,
        });

        // Capture the element as a canvas
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true, // Ensure CORS handling for images
        });

        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 210; // A4 width
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        let contentHeight = imgHeight;
        const pageHeight = pdf.internal.pageSize.height; // Get the height of a page in PDF
        let position = 0;

        // Add the first image to the PDF
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        contentHeight -= pageHeight;

        // Loop to handle content that exceeds one page
        while (contentHeight >= 0) {
            position -= pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            contentHeight -= pageHeight;
        }

        pdf.save(`${property.name}.pdf`);

        // Hide content after download
        setContentVisible(false);
    };

    return (
        <>
            {/* Styling for the watermark */}
            <div className='p-0 '>
                <div
                    ref={printRef}
                    className={`px-2 absolute bg-white top-[-9999px]  w-[210mm]  box-border ${isContentVisible ? '' : 'hidden'}`}
                >
                    {/* Watermark */}
                    <div className="watermark">
                        Carla Flores
                    </div>

                    <div className="watermark2">
                        Carla Flores
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-2 gap-2 p-2 relative z-0"> 
                        <div className="flex flex-col col-span-2 justify-center items-center">
                            <h2 className="text-xl font-semibold uppercase">{property.name}</h2>
                            <p className="text-sm font-thin">{property.location}</p>
                        </div>

                        <div className="flex flex-col font-light">
                            <div className="py-0 my-0 flex text-[11px]">
                                <span className="px-1">Location:</span>
                                <span className="px-1 font-semibold">{property.location}</span>
                            </div>
                            <div className="py-0 my-0 flex text-[11px]">
                                <span className="px-1">Price:</span>
                                <span className="px-1 font-semibold">
                                    {new Intl.NumberFormat('en-PH', {
                                        style: 'currency',
                                        currency: 'PHP',
                                    }).format(property.price)}
                                </span>
                            </div>
                            <div className="py-0 my-0 flex text-[11px]">
                                <span className="px-1">Floor Area:</span>
                                <span className="px-1 font-semibold">{property.floorArea} Sqm</span>
                            </div>
                            <div className="py-0 my-0 flex text-[11px]">
                                <span className="px-1">Lot Area:</span>
                                <span className="px-1 font-semibold">{property.lotArea} Sqm</span>
                            </div>
                        </div>

                        <div className="flex flex-col font-light">
                            <div className="flex text-[11px] py-0 my-0">
                                <span className="px-1">Direct Sales Marketing Assistant:</span>
                                <span className="px-1 font-semibold">Carla Flores</span>
                            </div>
                            <div className="flex text-[11px] py-0 my-0">
                                <span className="px-1">PRC Licensed Number:</span>
                                <span className="px-1 font-semibold">0016602</span>
                            </div>
                            <div className="flex text-[11px] py-0 my-0">
                                <span className="px-1">Contact #:</span>
                                <span className="px-1 font-semibold">0961-279-6675</span>
                            </div>
                            <div className="flex text-[11px] py-0 my-0">
                                <span className="px-1">Email:</span>
                                <span className="px-1 font-semibold">florescarla399@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex flex-col col-span-2 font-light">
                            <div className="flex text-[11px] py-0 my-0 border border-black mb-1">
                                <span className="px-1">Features:</span>
                                <span className="px-1">{property.features.join(', ')}</span>
                            </div>
                            <div className="flex text-[11px] py-0 my-0 border border-black">
                                <span className="px-1">Payment Options:</span>
                                <span className="px-1">{property.paymentTerms.join(', ')}</span>
                            </div>
                        </div>

                        <div className="flex flex-col col-span-2 h-[850px] ">
                            <p className="text-xl font-bold uppercase">Images</p>
                            <div className="grid grid-cols-3 gap-1 col-span-2 items-start">
                                {property.images.slice(0, 15).map((image, index) => (
                                    <div key={index} className="p-1 w-full h-40">
                                        <img
                                            src={image}
                                            alt={index} // Use a descriptive alt text
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 col-span-2  h-[1050px] mt-[90px]">
                            <div className='p-1 h-[400px] rounded-lg shadow-xl'>
                                <img
                                    src={property.images[property.images.length-1]}
                                    alt="Descriptive alt text"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="grid grid-cols-1 space-1 h-[400px]">
                                <div className=' h-[200px]  p-1 rounded-lg shadow-xl'>
                                    <img
                                        src={property.images[property.images.length-2]}
                                        alt="Descriptive alt text"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className=' h-[200px]  p-1 rounded-lg shadow-xl'>
                                    <img
                                        src={property.images[property.images.length-3]}
                                        alt="Descriptive alt text"
                                        className="w-full h-full object-cover rounded-lg "
                                    />
                                </div>
                            </div>

                            <div className='col-span-2  p-1 h-[240px] rounded-lg shadow-xl'>
                                <img
                                    src={property.images[property.images.length-4]}
                                    alt="Descriptive alt text"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="grid grid-cols-1 space-1 h-[400px] ">
                                <div className=' h-[200px]  p-1 rounded-lg shadow-xl'>
                                    <img
                                        src={property.images[property.images.length-5]}
                                        alt="Descriptive alt text"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className='h-[200px]  p-1 rounded-lg shadow-xl'>
                                    <img
                                        src={property.images[property.images.length - 6]}
                                        alt="Descriptive alt text"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className=' p-1 h-[400px] rounded-lg shadow-xl'>
                                <img
                                    src={property.images[property.images.length - 7]}
                                    alt="Descriptive alt text"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Watermark Styles */}
                    <style>
                        {`
                            .watermark {
                            position: absolute;
                            top: 25%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-45deg); /* Rotate the text */
                            opacity: 0.15; /* Transparency */
                            font-size: 10rem;
                            font-weight: bold;
                            color: #FA8072;
                            z-index: 10; /* Above the content */
                            pointer-events: none;
                            white-space: nowrap;
                            letter-spacing: 1rem;
                            font-family: 'Playfair Display', serif;
                            }

                            .watermark2 {
                            position: absolute;
                            top: 75%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-45deg); /* Rotate the text */
                            opacity: 0.15; /* Transparency */
                            font-size: 10rem;
                            font-weight: bold;
                            color: #FA8072;
                            z-index: 10; /* Above the content */
                            pointer-events: none;
                            white-space: nowrap;
                            letter-spacing: 1rem;
                            font-family: 'Playfair Display', serif;
                            }
                        `}
                    </style>
                </div>


                <FontAwesomeIcon
                    icon={faCloudDownload}
                    onClick={handleDownloadPdf}
                    title="Download Property Details"
                    className="cursor-pointer text-blue-400"
                />
            </div>
        </>

    );
};

export default HtmlToPdf;
