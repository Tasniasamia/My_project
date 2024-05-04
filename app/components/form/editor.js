"use client"

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Editor = dynamic(() => import("./text-editor"), { ssr: false })
const TextEditor = ({ value, onChange }) => {
    useEffect(() => { }, [value])
    if (!!value) {
        return <Editor value={value} onChange={onChange} />
    }
    return (
        <div className="border">
            <Editor value={value} onChange={onChange} />
        </div>
    )
}

export default TextEditor;