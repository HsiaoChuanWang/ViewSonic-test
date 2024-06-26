import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [innerText, setInnerText] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [outerWidth, setOuterWidth] = useState("w-[400px]");
  const textareaRef = useRef(null);

  //Use useEffect and useRef to resize textarea automatically
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const innerTextLength = innerText.length;
      const innerTextWidth = innerTextLength * 16;
      let currentHeight = textarea.scrollHeight;

      if (
        (outerWidth === "w-[400px]" && innerTextWidth < 300) ||
        (outerWidth === "w-[800px]" && innerTextWidth < 700)
      ) {
        const initialWidth = 160;
        const textAreaWidth =
          innerTextWidth < initialWidth ? initialWidth : innerTextWidth;
        textarea.style.width = `${textAreaWidth}px`;
      } else {
        textarea.style.width = "100%";
      }

      if (currentHeight < 48) {
        textarea.style.height = "24px";
      } else {
        textarea.style.height = "auto";
        currentHeight = textarea.scrollHeight;
        textarea.style.height = currentHeight + "px";
      }
    }
  }, [innerText, isEditable, outerWidth]);

  const handleInputChange = (e) => {
    setInnerText(e.target.value);
  };

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleResize = () => {
    outerWidth === "w-[400px]"
      ? setOuterWidth("w-[800px]")
      : setOuterWidth("w-[400px]");
  };

  return (
    <div
      className={`${outerWidth} border border-red-400 border-solid m-8 py-6 flex justify-evenly`}
    >
      <div className={`w-[calc(100%-96px)]`}>
        {isEditable ? (
          <textarea
            ref={textareaRef}
            className={`border-black border border-solid px-2 bg-slate-200 overflow-hidden h-6 leading-6`}
            value={innerText}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        ) : (
          <span
            className={`border-black border border-solid break-words px-2 inline-block max-w-full`}
          >
            {innerText.trim() ? innerText : "Click edit button to type!"}
          </span>
        )}
      </div>

      <div className="w-16">
        <button
          className={`${
            isEditable && "bg-gray-200"
          } hover:bg-red-200 border border-black border-solid w-full mb-2`}
          onClick={handleEdit}
        >
          {isEditable ? "editing" : "edit"}
        </button>
        <button
          className="border border-black border-solid w-full hover:bg-red-200"
          onClick={handleResize}
        >
          resize
        </button>
      </div>
    </div>
  );
}

export default App;
