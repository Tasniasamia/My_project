"use client"

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useEffect, useState } from "react";

const DraftEditor = ({ value, onChange }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    useEffect(() => {
        const contentBlock = htmlToDraft(value || "");
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            setEditorState(EditorState.createWithContent(contentState))
        }
    }, [])

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        if (onChange) {
            onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }
    }

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName=""
            editorClassName="tw-h-20 p-2"
            onEditorStateChange={onEditorStateChange}
        />
    )
}
export default DraftEditor