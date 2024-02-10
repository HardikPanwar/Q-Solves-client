import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import KitCard from "../../components/Cards/KitCard";

const OpenSourceKit = () => {

  const data=[
    {
      title: "ConnectNovu Hackathon 2023",
      description : "Winners of the first Novu Hackathon!",
      imageSrc: "https://via.placeholder.com/300",
      authorName: "John Doe",
      authorPhotoSrc:"https://via.placeholder.com/50",
      date:"February 10, 2024"
    },
    {
      title: "ConnectNovu Hackathon 2023",
      description : "Winners of the first Novu Hackathon!",
      imageSrc: "https://via.placeholder.com/300",
      authorName: "John Doe",
      authorPhotoSrc:"https://via.placeholder.com/50",
      date:"February 10, 2024"
    },
    {
      title: "ConnectNovu Hackathon 2023",
      description : "Winners of the first Novu Hackathon!",
      imageSrc: "https://via.placeholder.com/300",
      authorName: "John Doe",
      authorPhotoSrc:"https://via.placeholder.com/50",
      date:"February 10, 2024"
    },
    {
      title: "ConnectNovu Hackathon 2023",
      description : "Winners of the first Novu Hackathon!",
      imageSrc: "https://via.placeholder.com/300",
      authorName: "John Doe",
      authorPhotoSrc:"https://via.placeholder.com/50",
      date:"February 10, 2024"
    },
  ]


  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>SourceKit</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              data && data.map((cardData)=> (
                <KitCard
                  key={cardData.title}
                  imageSrc={cardData.imageSrc}
                  title={cardData.title}
                  description={cardData.description}
                  authorName={cardData.authorName}
                  authorPhotoSrc={cardData.authorPhotoSrc}
                  date={cardData.date}
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
