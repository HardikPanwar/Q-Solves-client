import React, { useMemo } from 'react'
import Output from "editorjs-react-renderer"

const EditorOutput = ({content}) => {

    function CustomImageRenderer({data}) {
        const src=data.file.url;
    
        return (
            <div className="relative w-full min-h-[15rem]">
                <img alt="kitImage" className="object-contain" fill src={src} />
            </div>
        )
    }

    function CustomCodeRenderer({data}) {
        return (
            <pre className="bg-gray-800 rounded-md p-4">
                <code className="text-gray-100 text-sm">{data.code}</code>
            </pre>
        )
    }

    function CustomHeaderRenderer({ data }) {
        const Tag = `h${data.level}`;

        return (
            <Tag className={`font-bold text-xl`}>
                {data.text}
            </Tag>
        );
    }

    const renderers = useMemo(() => ({
        image: CustomImageRenderer,
        code: CustomCodeRenderer,
        header: CustomHeaderRenderer,
    }), [])


  return (
    <Output data={content} className='text-sm' renderers={renderers} />
  )
}

export default EditorOutput