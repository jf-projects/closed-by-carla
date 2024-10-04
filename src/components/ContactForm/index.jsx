import './index.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { toast } from 'react-toastify';
AOS.init();

const ContactForm = () => {
    const refForm = useRef();
    const [isDisabled, setIsDisabled] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsDisabled(true);

        emailjs
            .sendForm('service_zibsm3m', 'template_bsuklb8', refForm.current, 'EIZ5W28_Zxwvclt97')
            .then(
                () => {
                    toast.success('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    toast.error('Failed to send the message, please try again')
                }
            ).finally(() => {
                setIsDisabled(false);
            });
    }

    return <>
        <div className="pt-[10.5rem] pb-[8rem]" data-aos="fade-up" id='contact-section'
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className="text-center text-5xl text-heading mb-6">Contact Us</h1>

            <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                <div>
                    <h1 className="text-gray-800 text-3xl font-extrabold">For Inquiries</h1>
                    {/* <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p> */}
                    <p className="text-sm text-gray-500 mt-4">Looking to buy, sell, or invest in real estate? We'd love to hear about your needs and help you find the perfect property. Reach out to us today!</p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="#!" className="text-[#007bff] text-sm ml-4" onClick={(e) => e.preventDefault()}>
                                    <small className="block">Mail</small>
                                    <strong>florescarla399@gmail.com </strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.facebook.com/crlgmzfls.15" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auo space-y-4" ref={refForm} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        name="name"
                        required
                        autoComplete="name"
                    />

                    <input type='email' placeholder='Email'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        name="email"
                        required
                        autoComplete="email"
                    />

                    <input type='text' placeholder='Subject'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        name="subject"
                        autoComplete="subject"
                        required
                    />
                    <textarea placeholder='Message' rows="6"
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
                        name="message"
                        autoComplete="message"
                        required
                    ></textarea>
                    <button type='submit'
                        name="submit"
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
                        disabled={isDisabled}>Send</button>
                </form>
            </div>
        </div>
    </>
}

export default ContactForm;