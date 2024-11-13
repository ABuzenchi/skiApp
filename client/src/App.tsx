//rfc
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/home";
import Resorts from "./pages/resorts/resorts";
import Forum from "./pages/forum/forum";
import Header from "./components/Header/header";
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
