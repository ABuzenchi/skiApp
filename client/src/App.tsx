//rfc
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Resorts from "./pages/Resorts";
import Forum from "./pages/Forum";
import Header from "./components/Header";
const App=()=> {
    return(
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/resorts" element={<Resorts/>}></Route>
        <Route path="/forum" element={<Forum/>}></Route>
      </Routes>
      </BrowserRouter>
    )
}
export default App;
