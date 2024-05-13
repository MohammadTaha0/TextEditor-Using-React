import React, { useState } from 'react'
import Button from './Button'

export default function TextForm(props) {
    document.title = "Textutilz - Home";
    const [text, setText] = useState("")
    const [textArea, setTextArea] = useState("form-control")
    const [preview, setPreview] = useState("p-3")
    const [bold, setBold] = useState("Bold")
    const onChange = (event) => {
        setText(event.target.value);
    }
    const UpperCase = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText)
            props.alert("Converted to uppercase", "success")
        }
        else {
            props.alert("Fill First", "warning")
        }
    };
    const LowerCase = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText)
            props.alert("Converted to lowercase", "success")
        }
        else {
            props.alert("Fill First", "warning")
        }
    };
    const Capitalize = () => {
        if (text.length > 0) {
            const lower = text.toLowerCase();
            let newText = text.charAt(0).toUpperCase() + lower.slice(1);
            setText(newText)
            props.alert("Sentence Capitalize Successfully", "success")
        }
        else {
            props.alert("Fill First", "warning")
        }
    }
    const Bold = (event) => {
        if (text.length > 0) {
            if (textArea === "form-control") {
                let bold = "form-control fw-bold";
                let prevBold = "p-3 fw-bold"
                setPreview(prevBold)
                setTextArea(bold)
                setBold(event.target.value = "UnBold")
                props.alert("Converted to BOLD", "success")
            }
            else if (textArea === "form-control fw-bold") {
                let bold = "form-control";
                let prevBold = "p-3"
                setPreview(prevBold)
                setTextArea(bold)
                setBold(event.target.value = "Bold")
                props.alert("Converted to UNBOLD", "warning")
            }
        }
        else {
            props.alert("Fill First", "warning")
        }
    }
    const copy = (event) => {
        if (text.length > 0) {
            let prev = document.getElementById("text");
            prev.select();
            navigator.clipboard.writeText(prev.value);
            props.alert("Copy to clipboard", "success")
        }
        else {
            props.alert("Fill First", "warning")
        }
    }
    const extraspace = () => {
        if (text.length > 0) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.alert("Successfully Removed ectra spaces", "success")
        }
        else {
            props.alert("Fill First", "warning")
        }
    }
    return (
        <div style={{ color: props.mode === 'dark' ? "white" : "black" }}>
            <h3 className='my-4 text-capitalize'>{props.h4}</h3>
            <textarea className={textArea} id="text" style={{ backgroundColor: props.mode === "dark" ? "#0011" : "white", color: props.mode === 'dark' ? "white" : "black" }} placeholder='Enter Text Here...' value={text} onChange={onChange} rows="10"></textarea>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">

            </div>
            <div className="input-group mt-3 mb-2 p-0 mx-0">
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={UpperCase} value="AA" />
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={LowerCase} value="aa" />
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={Capitalize} value="Aa" />
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={Bold} value={bold} />
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={copy} value="copy" />
                <Button className={`bg-${props.mode === 'dark' ? "primary text-light border border-secondary" : "secondary text-light border"} mb-1 py-1 px-3 btn ${text.length === 0?"disabled":"" }`} onClick={extraspace} value="Remove extra Space" />
            </div>
            <br />
            <div className={`btn btn-${props.mode === 'dark' ? 'primary' : 'secondary'} me-2`}>{(text.length > 0) ? text.split(/\s+/).filter((elm)=>{return elm.length!==0}).length : 0} Words / {text.length} Characters</div>
            <div className="btn btn-primary">{(text.length > 0) ? ((0.008 * text.split(" ").length) * 60).toFixed("3") : 0} sec</div>
            <div className='mt-5 position-relative'> <h4>Preview</h4> <div className={preview} style={{ backgroundColor: props.mode === "dark" ? "#0011" : "white", color: props.mode === 'dark' ? "white" : "black" }}>
                {(text.length > 0) ?
                    <div id="prev">
                        {text}
                    </div>
                    : <div>Type Something To see preview</div>}
            </div>
            </div>

        </div>
    )
}
