import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { userinfo } from '../../constants/userinfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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

    emailjs.send(
      'service_0us2eci',
      'template_zp7rqcq',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'hAIP9zt1WWiIfTulP'
    )
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error);
        alert('Failed to send message. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-800">
      <div 
        data-aos="fade-in" 
        data-aos-delay="100"
        className="w-full max-w-lg bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-[500px]"
      >
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Me</h2>

          <div 
            data-aos="fade-left" 
            data-aos-delay="100"
            className="mb-4"
          >
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

          <div 
            data-aos="fade-right" 
            data-aos-delay="100"
            className="mb-4"
          >
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

          <div 
            data-aos="fade-left" 
            data-aos-delay="100"
            className="mb-4"
          >
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

          <div 
            data-aos="fade-right" 
            data-aos-delay="100"
            className="mb-6"
          >
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
            data-aos="fade-down" 
            data-aos-delay="200"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons at the Bottom */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200" 
          className="flex justify-center space-x-4 mt-8"
        >
          {userinfo.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;