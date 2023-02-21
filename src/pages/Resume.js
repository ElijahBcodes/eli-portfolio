import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Doc from "../ElijahBarreto.resume.pdf";

export default function Resume() {
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
