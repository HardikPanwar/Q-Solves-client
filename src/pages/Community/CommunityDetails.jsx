import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { useParams } from 'react-router-dom';
import QuestionList from '../../components/HomeMainbar/QuestionList';
import { useSelector } from 'react-redux';

function CommunityDetails() {
  const { id } = useParams();
  const questionslist = useSelector(state=> state.questionsReducer)
  return (
    <>
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2" style={{ marginTop: '60px' }}>
          <div class="bg-white shadow-lg transform duration-200 easy-in-out">
            <div class=" h-24 overflow-hidden">
              <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
            </div>
            <div class="flex justify-center px-5  -mt-20">
              <img class="h-32 w-32 bg-white p-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
            </div>
            <div class=" ">
              <div class="text-center px-14">
                <h2 class="text-gray-800 text-3xl font-bold">Javascript</h2>
                <p class="mt-2 text-gray-500 text-sm">A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className=" bg-green-400 px-7 py-1 text-lg font-bold leading-6 text-white shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-100"
                  style={{ backgroundColor: '#39739d', borderRadius: 20 }}>
                  Join
                </button>
              </div>
              <hr class="mt-6" />

              <div class="flex  bg-gray-50 ">
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    <span class="font-semibold">20</span> Members
                  </p>
                </div>
                <div class="border"></div>
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    {' '}
                    <span class="font-semibold">9 </span> Answers recommended
                  </p>
                </div>
                <div class="border"></div>
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    {' '}
                    <span class="font-semibold">138 </span> Questions
                  </p>
                </div>
                <div class="border"></div>
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    {' '}
                    <span class="font-semibold">7 </span> Articles
                  </p>
                </div>
              </div>
              {questionslist.data === null ? (
          <h1>Loading...</h1>
        ) : (
            <>
            <p style={{marginBottom:"10px",marginTop:"10px"}} >{questionslist.data.length} Questions</p>
            <QuestionList questionslist={questionslist.data} />
          </>
        )}
            </div>
          </div>

          
        
        </div>
      </div>
    </>
  );
}

export default CommunityDetails;
