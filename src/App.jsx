import Homepage from "./components/homepage/Homepage";
import { createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import "./App.css"
import { pdfjs } from 'react-pdf';



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {

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
        <Homepage />
      </MantineProvider>
    </>
  );
}

export default App;
