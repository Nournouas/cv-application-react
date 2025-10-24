import './App.css'
import Nav from './components/Nav'
import Builder from './components/Builder'
import { useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

//App Component
function App() {
  const [alignement, setAlignement] = useState(0);

  const handleChangeAlign = () => {
    alignement === 3 ? setAlignement(0) : setAlignement(alignement + 1);
    
  }

  const handleDownloadPdf =  async () => {
    const element = document.querySelector(".preview-container");
    if (!element){
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;


    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("example.pdf");
  }

  return (
    <div className='cv-builder'>
      <Nav onClick={handleChangeAlign} align={alignement} onDownload={handleDownloadPdf}/>
      <Builder align={alignement}/>
    </ div>
  )
}

export default App
