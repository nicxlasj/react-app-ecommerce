import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home";
import NotFound from "../notFound";
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrders";
import NavBar from "../../components/navbar";
import SignIn from "../signIn";

function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "my-account",
      element: <MyAccount />,
    },
    {
      path: "my-order",
      element: <MyOrder />,
    },
    {
      path: "my-orders",
      element: <MyOrders />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <NavBar></NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
