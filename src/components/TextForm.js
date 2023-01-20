import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toLocaleUpperCase());
    if (text.toLocaleUpperCase().length !== 0) {
      props.showAlert("successfully converted to UpperCase", "primary");
    }
  };
  const handleLowClick = () => {
    setText(text.toLocaleLowerCase());
    if (text.toLocaleLowerCase().length !== 0) {
      props.showAlert("successfully converted to LowerCase", "info");
    }
  };
  const handleremoveClick = () => {
    setText("");
    if (text.length !== 0) {
      props.showAlert("successfully text cleared", "danger");
    }
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // .then(() => {
    //   alert("successfully copied");
    // })
    // .catch(() => {
    //   alert("something went wrong");
    // });
    if (text.value.length !== 0) {
      props.showAlert("successfully text copied to clipboard ", "success");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length !== 0) {
      props.showAlert("successfully removed ExtraSpace", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#172335",
        }}
      >
        <h1 className="my-3">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "#172335",
              color: props.mode === "dark" ? "#172335" : "white",
            }}
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-primary ">
            Convert to Uppercase
          </button>
          <button onClick={handleLowClick} className="btn btn-info m-3">
            Convert to Lowercase
          </button>
          <button onClick={handleremoveClick} className="btn btn-danger ">
            remove
          </button>
          <button onClick={handleCopy} className="btn btn-success m-3 ">
            copyToCopy
          </button>
          <button onClick={handleExtraSpaces} className="btn btn-warning ">
            handleExtraSpaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#172335",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>

        <h2>
          {text.length === 0
            ? "Enter something in the textbox above to preview it here"
            : text}
        </h2>
      </div>
    </>
  );
}
