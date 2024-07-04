import "./App.css";
import AboutUs from "./pages/AboutPage/AboutUs";
import Navbar from "./components/CommonComponents/NavbarComponent/Navbar";
import Footer from "./components/CommonComponents/FooterComponent/Footer";
import ContactUs from "./pages/ContactPage/ContactUs";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AboutUs />,
    },
    {
      path: "contact",
      element: <ContactUs />,
    },
  ]);
  return (
    <>
      <Navbar />

      <RouterProvider router={router} />

      <Footer />
    </>
  );
}

export default App;
