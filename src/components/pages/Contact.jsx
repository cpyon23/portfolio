import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.send(
      'service_0us2eci',    // Replace with your EmailJS service ID
      'template_zp7rqcq',   // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'hAIP9zt1WWiIfTulP'        // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email successfully sent:', result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('There was an error sending the email:', error);
      alert('Failed to send message. Please try again later.');
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div data-aos="fade-in" className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Me</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-600 text-black dark:text-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-600 text-black dark:text-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-600 text-black dark:text-gray-100"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-600 text-black dark:text-gray-100"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;