import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Doc from '../ElijahBarreto.resume.pdf'


export default function Resume() {

  return (
  
    <div className='flex mt-4 justify-center'>
    <Document  file={Doc} >
      <Page pageNumber={1} />
    </Document>

  </div>

  )
}

