import React from "react";

function Contact() {
    return (
        <div className="flex flex-col pt-10 pb-10 px-4">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/0025670c-0920-4f17-9f70-bf2c60ffb592"
                    method="POST"
                    className="hover:border-gray-600 ease-in duration-300 border-4 border-gray-600 flex flex-col w-full md:w-3/4 xl:w-1/2 rounded-xl pb-4 px-4 bg-gray-800"
                >
                    <h1 className="text-xl font-bold text-center p-4 mb-1">
                        Contact
                    </h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 mb-2 rounded-lg bg-gray-700"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 mb-2 rounded-lg bg-gray-700"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="6"
                        className="p-2 mb-2 rounded-xl bg-gray-700"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-gray-700 rounded-3xl hover:bg-gray-600"
                    >
                        <b>Send</b>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
