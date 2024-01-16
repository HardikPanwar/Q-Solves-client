import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
import './Tags.css'

const Tags = () => {

    const tagList=[{
        id:1,
        tagName: "javascript",
        tagDesc:"JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
    {
        id:2,
        tagName: "java",
        tagDesc:"Not to be confused with Java (software platform), JavaScript, or Javanese language. Java is a high-level, class-based, object-oriented programming language"
    },
    {
        id:3,
        tagName:"Python",
        tagDesc:"Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
    }

]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A Tag is a keyword or label that categorizes your question with others, similar questions</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question</p>
            <div className="tags-list-container">
                {
                    tagList.map((tag)=> (
                        <TagList key={tagList.id} tag={tag} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags