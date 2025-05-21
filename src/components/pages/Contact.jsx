import React from "react";

function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Email us At : forexample@gmail.com</p>
        <p>Call us At : +123456789</p>

        <form className="mt-6 flex flex-col items-center">
            <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
                placeholder="Your Message"
                className="p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Send Message
            </button></form>
     
  </div>
    </>
  );
}

export default Contact;
