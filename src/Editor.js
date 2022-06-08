import React, { useState } from 'react';

// Components
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Hooks version of the Class below (done by me)
const WYSIWYGEditor = (props) => {

const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(props.default))));

const onEditorStateChange = editorState => {
    props.callback(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    return setEditorState(editorState)
} 

    return (
        <div className="editor">
        <Editor 
            editorState={editorState} 
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
        />
        </div>
    )
};

export default WYSIWYGEditor