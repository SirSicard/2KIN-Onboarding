import { useEffect, useRef, useState } from "react";

export default function ShopImages() {
  const [views, setViews] = useState("view 1");
  const ref = useRef();

  useEffect(() => {
    handleSelectedImage()
  }, [views])

  const [primarySrc, setPrimarySrc] = useState(
    ""
  );
  function handleSelectedImage() {
    switch (views) {
      case "view 1":
        return setPrimarySrc(
          "https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
        );
      case "view 2":
        return setPrimarySrc(
          "https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
        );
      case "view 3":
        return setPrimarySrc(
          "https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
        );
      case "view 4":
        return setPrimarySrc(
          "https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
        );
    }
  }
  
  return (
    <div className={"image-content"}>
      <div className="selectedImage">
        <img src={primarySrc} alt="selected Image" />
      </div>
      <div ref={ref} className="img-view-content">
        <div className="img-view">
          <img
            onClick={() => {
              setViews("view 1");
            }}
            src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
            alt="view 1"
          />
        </div>
        <div className="img-view">
          <img
            onClick={() => {
              setViews("view 2");
              
            }}
            src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
            alt="view 2"
          />
        </div>
        <div className="img-view">
          <img
            onClick={() => {
              setViews("view 3");
            }}
            src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
            alt="view 3"
          />
        </div>
        <div className="img-view">
          <img
            onClick={() => {
              setViews("view 4");
            }}
            src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
            alt="view 4"
          />
        </div>
      </div>
    </div>
  );
}
