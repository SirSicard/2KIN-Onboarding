import { createRef } from "react";

export default function ShopImages() {
    const ref = createRef();
  return (
    <div ref={ref} className={"image-content"}>
    <div className="selectedImage">
      <img
        src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
        alt="selectImage"
      />
    </div>
    <div>
    <div className="img-view">
      <img
        src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
        alt="view 1"
      />
    </div>
    <div className="img-view">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
        alt="view 2"
      />
    </div>
    <img
      src="https://www.shutterstock.com/image-photo/closeup-silicon-die-being-extracted-600nw-2262331365.jpg"
      alt="view 3"
    />
    <div className="img-view">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
        alt="view 4"
      />
    </div>
    </div>
  </div>
  )
}
