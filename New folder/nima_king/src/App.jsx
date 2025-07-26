import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import SidebarDemo from "./New";
import "bootstrap-icons/font/bootstrap-icons.css";
import DefaultExample from "./components/Sidebar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<DefaultExample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
