import React from "react";

function Contact() {
  return (
    <div className="flex flex-col pt-10 pb-10 px-2 sm:px-0">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/0025670c-0920-4f17-9f70-bf2c60ffb592"
          method="POST"
          className="border-4 border-gray-700 flex flex-col w-full md:w-7/12 rounded-xl pb-4 px-4 bg-gradient-to-tr from-slate-800 to-cyan-900"
        >
          <p className="mt-4 mb-5 text-center text-base md:text-xl font-medium">
            Contact
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 mb-2 rounded-lg bg-white bg-opacity-10"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 mb-2 rounded-lg bg-white bg-opacity-10"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="p-2 mb-2 rounded-xl bg-white bg-opacity-10"
          />
          <button
            type="submit"
            className="p-2 underline bg-white bg-opacity-10 rounded-3xl hover:bg-opacity-20"
          >
            <b>Send</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
