import React from 'react'
import { userinfo } from '../../constants/userinfo'

const Work = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-20 lg:px-40">
      <h2 className="bg-gradient-to-r from-blue-700 to-purple-400 text-transparent bg-clip-text text-4xl font-bold text-center mb-12">Work Experience</h2>
      <div className="relative">
        <div className="border-l-4 border-gray-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {userinfo.experience.experienceList.map((experience, index) => (
          <div
            key={index}
            className={`flex items-center justify-between mb-8 ${
              index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'
            }`}
          >
            <div className="w-full md:w-1/2 px-4">
              <h3 className="bg-gradient-to-r from-blue-700 to-purple-400 text-transparent bg-clip-text text-2xl font-semibold">{experience.position}</h3>
              <h4 className="text-gray-700 dark:text-gray-300 text-xl font-medium">{experience.company}</h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{experience.description}</p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="inline-block bg-gray-900 text-gray-100 py-2 px-4 rounded-full">
                {experience.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
