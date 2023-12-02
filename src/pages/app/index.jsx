import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home";
import NotFound from "../notFound";
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrders";
import NavBar from "../../components/navbar";
import SignIn from "../signIn";
import ProductContextProvider from "../../context/ProductContext";
import CheckoutSideMenu from "../../components/checkoutSideMenu";
import Categories from "../categories";

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
      path: "category/:id",
      element: <Categories />
    },
    {
      path: "my-orders",
      element: <MyOrders />,
    },
    {
      path: "my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
  return routes;
}

function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
          <NavBar></NavBar>
          <CheckoutSideMenu></CheckoutSideMenu>
        </BrowserRouter>
      </ProductContextProvider>
    </>
  );
}

export default App;
