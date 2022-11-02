import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { GlobalStyle } from "./styles/GlobalStyles";
import Routes from "./routes/Routes";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
      <ReactQueryDevtools />
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
