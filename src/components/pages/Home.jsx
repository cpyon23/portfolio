import React, { useState, useEffect } from 'react';
import backgroundVideo from '../../assets/calm.mp4'
import { userinfo } from '../../constants/userinfo'

const TypingEffect = ({ text, speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, speed / 2); // Speed up the deletion process
      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      setTimeout(() => setIsDeleting(true), pause); // Pause before deleting
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }
  }, [index, isDeleting, text, speed, pause]);

  return <span>{displayedText}</span>;
};

const Home = ({ text }) => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 text-center bg-opacity-60 bg-black p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {userinfo.greeting.title}
          <TypingEffect text={userinfo.logoText} />
          !
        </h1>
        <p className="text-lg md:text-2xl text-gray-200">
          {userinfo.greeting.welcomeContent}
        </p>
      </div>
    </div>
  );
};

export default Home
