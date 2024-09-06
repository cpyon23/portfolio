import React from 'react'
import meImage from '../../assets/me.jpg'
import { userinfo } from '../../constants/userinfo'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">About Me</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            { userinfo.about.heading }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={meImage}
              alt="Profile" 
              className="w-80 h-80 rounded-full shadow-lg object-cover border-4 border-gray-900 dark:text-gray-100"
            />
          </div>

          {/* About Me Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl leading-relaxed">
              {userinfo.about.content1}
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">
              {userinfo.about.content2}
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">
              {userinfo.about.content3}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {userinfo.expertise.expertiseList.map((expertise, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {expertise.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
