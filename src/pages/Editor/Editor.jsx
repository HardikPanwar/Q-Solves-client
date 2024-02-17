import React, { useCallback, useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import ReactTextareaAutosize from 'react-textarea-autosize';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import axios from 'axios';

import List from "@editorjs/list"
import Code from "@editorjs/code"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import InlineCode from "@editorjs/inline-code"
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import ImageTool from "@editorjs/image"
import { useDispatch } from 'react-redux';
import { createKit } from '../../actions/kit';
import { useNavigate } from 'react-router-dom';


const Editor = () => {
    const editorRef = useRef(null);
    const titleRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const initializeEditor = useCallback(async ()=> {

      if(!editorRef.current) {
      const editor = new EditorJS({
          holder: 'editorjs',
  
          onReady: () => {
            console.log("editor is ready");
            editorRef.current = editor
           },

           placeholder: 'Type here  to write your post',
          inlineToolbar: true,
          data: {blocks: []},
                tools: {
                    header: Header,
                    linkTool :{
                        class: LinkTool,
                        config: {
                            endpoint: `${process.env.REACT_APP_BACKEND_URL}/kit/link/`
                        }
                    },
                    image: {
                      class: ImageTool,
                      config: {
                          uploader: {
                              async uploadByFile(file) {
                                const formData = new FormData();
                                formData.append('image', file);

                                try {
                                    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/kit/image/`, formData);
                                    console.log('Image uploaded successfully:', response.data.file_name);

                                    return {
                                      "success" : 1,
                                      "file": {
                                          "url" : response.data.file_name,
                                          // ... and any additional fields you want to store, such as width, height, color, extension, etc
                                      }
                                    }
                                } catch (error) {
                                    console.error('Error uploading image:', error);
                                }
                              }
                          }
                      }
                  },

                    list: List,
                    code: Code,
                    inlineCode: InlineCode,
                    table: Table,
                    embed: Embed,
                }
      })
    }
    },[])
    
    useEffect(()=> {
      if(typeof window!== 'undefined') {
          setIsMounted(true)
      }
  },[isMounted])

    useEffect(()=> {
      const init=async ()=> {
        await initializeEditor();

        setTimeout(()=> {
            titleRef.current?.focus();
        },0)

    }
    if(isMounted)  {
        init()
    }

    return ()=> {
      editorRef.current?.destroy()
      editorRef.current=undefined
  }
    },[isMounted,initializeEditor])

    if(!isMounted) return null;

    const onSubmit = async (e) => {
      e.preventDefault()
      // const content = editorRef.current.blocks;
      // console.log(content);
      
      const data = await editorRef.current.save(); // Access the data using the save() method

      const containsImage = data.blocks.some(block => block.type === 'image');
      const containsPara = data.blocks.some(block => block.type==='paragraph');

      if(!containsPara) {
        alert('Please add an paragraph to your content before submitting.');
        return;
      }
      if (!containsImage) {
          alert('Please add an image to your content before submitting.');
          return;
      }
      dispatch(createKit(titleRef.current.value,data,navigate));
    }

  return (
    <div className="home-container-1">
      <LeftSidebar />
    <div className="home-container-2" style={{ marginTop: "50px" }}>
      <form id="subreddit-post-form" className="w-fit" onSubmit={(e) => onSubmit(e)}>
        <div className="prose prose-stone dark:prose-invert">
          <ReactTextareaAutosize
            ref={(e)=> {
                titleRef.current=e;
            }}  
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl font-bold focus:outline-none"
          />

          <div id="editorjs" className="min-h-[500px]" />
          <button type="submit" className='bg-green-900 rounded-md text-white p-3 m-3 cursor-pointer'>Create</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Editor