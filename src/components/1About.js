import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h1
        className="text-center"
        style={{
          color: props.mode === "dark" ? "white" : "#172335",
        }}
      >
        About Us
      </h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne1"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo1"
              aria-expanded="false"
              aria-controls="collapseTwo1"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo1"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree1"
              aria-expanded="false"
              aria-controls="collapseThree1"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree1"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#172335" : "white",
                color: props.mode === "dark" ? "white" : "#172335",
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
