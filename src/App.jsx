import Homepage from "./components/homepage/Homepage";
import { createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import "./App.css"
import { pdfjs } from 'react-pdf';
import { useEffect, useState } from "react";



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const [visitCount, setVisitCount]= useState(0);
  const passkey= "Snow123$";


  useEffect(() => {
    // Fetch the Netlify function to log the visit with timestamp
    fetch('/.netlify/functions/logVisit')
      .then(response => response.json())
      .then(data => console.log('Visit logged:', data.message))
      .catch(error => console.error('Error logging visit:', error));
  }, []);

  
  const theme= createTheme({
    breakpoints: {
      "xs": "320px",
      "sm": "476px",
      "md": "640px",
      "bs": "768px",
      "lg": "900px",
      "xl": "1024px",
      "2xl": "1280px"
    }
  })

  return (
    <>
      <MantineProvider theme={theme}>
        <Homepage passkey= {passkey} visitCount= {visitCount} />
      </MantineProvider>
    </>
  );
}

export default App;
