import React, { useEffect } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import KitCard from "../../components/Cards/KitCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMetaData } from "../../actions/kit";

const OpenSourceKit = () => {
  const dispatch= useDispatch();
  const {metaData}=useSelector((state) => state.kitReducer)

  useEffect(()=> {
    dispatch(getMetaData())
  },[dispatch])
  // const data=[
  //   {
  //     title: "ConnectNovu Hackathon 2023",
  //     description : "Winners of the first Novu Hackathon!",
  //     imageSrc: "https://via.placeholder.com/300",
  //     authorName: "John Doe",
  //     authorPhotoSrc:"https://via.placeholder.com/50",
  //     date:"February 10, 2024"
  //   },
  //   {
  //     title: "ConnectNovu Hackathon 2023",
  //     description : "Winners of the first Novu Hackathon!",
  //     imageSrc: "https://via.placeholder.com/300",
  //     authorName: "John Doe",
  //     authorPhotoSrc:"https://via.placeholder.com/50",
  //     date:"February 10, 2024"
  //   },
  //   {
  //     title: "ConnectNovu Hackathon 2023",
  //     description : "Winners of the first Novu Hackathon!",
  //     imageSrc: "https://via.placeholder.com/300",
  //     authorName: "John Doe",
  //     authorPhotoSrc:"https://via.placeholder.com/50",
  //     date:"February 10, 2024"
  //   },
  //   {
  //     title: "ConnectNovu Hackathon 2023",
  //     description : "Winners of the first Novu Hackathon!",
  //     imageSrc: "https://via.placeholder.com/300",
  //     authorName: "John Doe",
  //     authorPhotoSrc:"https://via.placeholder.com/50",
  //     created_at:"February 10, 2024"
  //   },
  // ]


  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "50px" }}>
        <Link to={'create'}>
          <button className="bg-green-900 rounded-md text-white p-3 m-3 cursor-pointer">Create Kit</button>
        </Link>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              metaData && metaData.map((cardData)=> (
                <KitCard
                  key={cardData.id}
                  id={cardData.id}
                  imageSrc={cardData.imageSrc}
                  title={cardData.title}
                  description={cardData.description}
                  date={cardData.created_at}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceKit;
