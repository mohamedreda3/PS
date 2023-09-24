import Home from "../../pages/home";
import ServiceDetails from "../../pages/services";

export const routes = [
  { path: "/", label: "Home", comonent: <Home /> },
  { path: "/services", label: "Services", comonent: <ServiceDetails /> }
];
