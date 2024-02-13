import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import './Community.css';
const Community = () => {
  const cardData = [
    { title: 'Javascript', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'CI/CD', content: 'A collective where developers focused on continuous integration, delivery, and deployment can find, share, and learn about simultaneous development.' },
    { title: 'Ror', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'Android', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'React', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
    { title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },{ title: 'Node.JS', content: 'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms' },
  ];
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="flex flex-wrap p-20 mt-">
        {cardData.map((card, index) => (
          <div class="p-3  md:w-1/2">
            <div class="flex rounded-lg h-full dark:bg-white shadow-2xl bg-teal-400 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-5 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="container mx-auto flex justify-between items-center">
                  <div className="flex flex-shrink-0 items-center ">
                    <h2 className="text-lg font-semibold" style={{ color: '#005B41' }}>
                      {card.title}
                    </h2>
                  </div>
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex  space-x-10">
                      <button
                        type="submit"
                        className=" bg-green-400 px-4 text-xs font-bold leading-6 text-white shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-100"
                        style={{ backgroundColor: '#39739d', borderRadius: 20 }}>
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <p className="text-xs text-black">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
