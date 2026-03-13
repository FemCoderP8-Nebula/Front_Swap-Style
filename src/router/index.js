import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy/Privacy";
import Register from "../pages/Register/Register";
import Validation from "../pages/Validations/Validation";
import Login from "../pages/Login/Login";
import Gallery from "../pages/Gallery/Gallery";
import Detail from "../pages/Detail/Detail";
import RegArticle from "../pages/RegArticle/RegArticle";
import Contact from "../pages/Contact/Contact";
import Faqs from "../pages/Faqs/Faqs";
import Panel from "../pages/Panel/UserPanel";
import Wardrobe from "../pages/Wardrobe/Wardrobe";
import HangerLoading from "../components/organisms/Loading/HangerLoading";
import CheckModal from "../pages/Validations/CheckModal";
import Prueba from "../pages/muestra";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HangerLoading,
  },
  {
    path: '/home',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "privacy", Component: Privacy },
      { path: "register", Component: Register },
      { path: "validation", Component: Validation },
      { path: "checkmodal", Component: CheckModal },
      { path: "login", Component: Login },
      { path: "gallery", Component: Gallery },
      { path: "info/:id", Component: Detail },
      { path: "regArticle", Component: RegArticle },
      { path: "contact", Component: Contact },
      { path: "faqs", Component: Faqs },
      { path: "panel", Component: Panel },
      { path: "wardrobe", Component: Wardrobe },
      { path: "prueba/:id", Component: Prueba },
    ],
  },
]);