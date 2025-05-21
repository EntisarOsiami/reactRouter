import { createBrowserRouter } from "react-router";
import { RouterProvider, Outlet } from "react-router";
import About from "../components/pages/About";
import Programs from "../components/pages/Programs";
import Home from "../components/pages/Home";
import Nav from "../components/pages/Nav";
import Footer from "../components/pages/Footer";
import Contact from "../components/pages/Contact";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Programs",
        element: <Programs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
