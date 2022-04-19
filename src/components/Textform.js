import React, {useState } from 'react'

export default function Textform(props) {

  const handleupclick = () =>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")

  }
  const handleDownclick = () =>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")

  }
  const handleClearclick = () =>{
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared","success")
  }
  const handleOnChange = (event) =>{
  
    setText(event.target.value)
  }

  const CopyText =() =>{
     const copytext = document.getElementById('my-box');

     copytext.select();
     navigator.clipboard.writeText(copytext.value);

     alert('You Copied Text :'+ copytext.value)
  }
  const [text, setText] = useState('enter text here');
  return (
    
      <>
      <div className="container" style={{ color: props.Mode==="dark"?"white":"black" }}>
    <h2>{props.heading} </h2>
<div className="mb-3">
  <textarea className="form-control" id="my-box" value={text}  style={{ backgroundColor: props.Mode==="dark"?"#162430":"white",color: props.Mode==="dark"?"white":"black"}} onChange={handleOnChange} rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleDownclick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={CopyText}>Copy</button>
        </div>
      

        <div className="container"  style={{ color: props.Mode==="dark"?"white":"black" }}>
          <h2>Your text summary </h2>
          <p>{text.split(" ").length} words and {text.length} charactrs</p>
          <p>{0.008*text.split(" ").length} Minutes to Read </p>
           
        <h3>Preview</h3>
           <p> {text} </p>
          </div>
      </>
  
  )
}
