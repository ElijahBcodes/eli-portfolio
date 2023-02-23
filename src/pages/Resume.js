import React from "react";
import { Document, Page } from "react-pdf";
import Doc from "../ElijahBarreto.resume.pdf";

const Resume = ()=> {

  return (
    <>
      <div className="hero bg-black">
        <div className="hero-content  justify-center ">
          <Document file={Doc}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </>
  );
}


export default  Resume;