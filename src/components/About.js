import React, { useState } from "react";

export default function About(props) {
  // const toggleStyle = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark mode");
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtntext("Enable White Mode");
  //   }
  // };

  // const [mystyle, setmystyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  const mystyle ={
    color : props.Mode ==='dark'?'white':'rgb(22, 36, 48)',
    backgroundColor : props.Mode ==="dark"?"rgb(22, 36, 48)":"white"

  }


  // const [btntext, setbtntext] = useState("Enable dark mode");

  return (
    <div className="container" style={mystyle}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
<strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            style={mystyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>words Manager</strong> gives you a way to analyze your
              text quickly and efficiently. be it word count, charactrs count or
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle} >
              <strong>Words Manager</strong> is a free character counter tool
              that provides instant character count & word count statistics or a
              given text. Word-Manager reports the number of words and
              charactrs. Thus it is suitable for waiting text with word/
              charactr limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong> Browser Compatable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works at any web Browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count charactrs in facebook, blog, books, excel document, pdf
              document,essays, etc
            </div>
          </div>
        </div>
        {/* <div className="container">
          <button
            onClick={toggleStyle}
            type="button"
            class="btn btn-primary my-3"
            onClic
          >
            {btntext}{" "}
          </button>
        </div> */}
      </div>
    </div>
  );
}
