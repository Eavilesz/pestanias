import react, { useState } from "react";

const Createtab = (props) => {
  const [tab1Color, setTab1Color] = useState("white");
  const [tab2Color, setTab2Color] = useState("white");
  const [tab3Color, setTab3Color] = useState("white");
  const [tabContent, settabContent] = useState("Click tab.");

  const clickHandler1 = () => {
    setTab1Color("blue");
    setTab2Color("white");
    setTab3Color("white");
    settabContent("Tab 1 content is showing here.");
  };
  const clickHandler2 = () => {
    setTab2Color("blue");
    setTab1Color("white");
    setTab3Color("white");
    settabContent("Tab 2 content is showing here.");
  };
  const clickHandler3 = () => {
    setTab3Color("blue");
    setTab1Color("white");
    setTab2Color("white");
    settabContent("Tab 3 content is showing here.");
  };

  return (
    <div className="container">
      <div className="row">
        <button
          className="col-sm btn border-dark m-3"
          type="button"
          style={{ backgroundColor: tab1Color }}
          onClick={clickHandler1}
        >
          Tab 1
        </button>

        <button
          className="col-sm btn  border-dark m-3"
          type="button"
          style={{ backgroundColor: tab2Color }}
          onClick={clickHandler2}
        >
          Tab 2
        </button>

        <button
          className="col-sm btn  border-dark m-3"
          type="button"
          style={{ backgroundColor: tab3Color }}
          onClick={clickHandler3}
        >
          Tab 3
        </button>
      </div>
      <div
        className="description"
        style={{
          border: "1px solid black",
          height: "100px",
          textAlign: "left",
          fontSize: "20px",
        }}
      >
        {tabContent}
      </div>
    </div>
  );
};

export default Createtab;
