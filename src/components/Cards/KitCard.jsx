import React from 'react'
import { Link } from 'react-router-dom'

const KitCard = ({ id,imageSrc, title, description, authorName, authorPhotoSrc, date }) => {

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-52" src={imageSrc} alt={title} />
      <Link to={`/kit/${id}`} className="px-6 py-4 cursor-pointer">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </Link>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={authorPhotoSrc} alt={authorName} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{authorName}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KitCard;