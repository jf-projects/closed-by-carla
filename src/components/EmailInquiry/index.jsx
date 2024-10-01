import React, { useState } from 'react';


const EmailModal = ({ isOpen, onClose, onSend }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(email, message, name, number);
        onClose();
        setEmail('');
        setMessage('');
        setName('');
        setNumber('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-700">Send Inquiry</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-600 transition duration-200"
                    >
                        &#x2715;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-600">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="number" className="text-sm font-semibold text-gray-600">
                            Contact Number:
                        </label>
                        <input
                            type="text"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-600">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 bg-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-400 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition duration-200"
                        >
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EmailModal;
