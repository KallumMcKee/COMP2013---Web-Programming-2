import "./App.css";
import ContactsApp from "./Components/ContactsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import NotAuthorized from "./Components/NotAuthorized";
import PageNotFound from "./Components/PageNotFound";
import PrivatePage from "./Components/PrivatePage";
import LoginPage from "./Components/LoginPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/register" element={<egisterPage />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="/Private-Page" element={<PrivatePage />} />
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="/log-in page" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ContactsApp />
    </>
  );
}

export default App;
