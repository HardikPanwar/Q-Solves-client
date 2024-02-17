import React, { useEffect, useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import EditorOutput from '../Editor/EditorOutput'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const KitDetails = () => {
  const {id}=useParams();
  const [kit, setKit] = useState(null)

  useEffect(()=> {
    const getData=async ()=> {
      try {
        const {data}=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/kit/${id}/`);
        console.log(data)
        setKit(data.data)
      }
      catch(error) {
        console.log(error);
      }
    }
    getData();
  },[id])
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        {
          kit ? (<div className='home-container-2 w-full' style={{ marginTop: "50px" }}>
            <h2 className='text-2xl font-extrabold'>{kit.title}</h2>
            <EditorOutput content={kit.content}  />
          </div>): <p className='text-xl' style={{ marginTop: "50px" }}>Loading...</p>
      }
    </div>
  )
}

export default KitDetails