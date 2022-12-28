import {
RegisterProductPage,
  HomePage,

} from "../pages";

const routes = () => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/newproduct",
      element: <RegisterProductPage />,
    },
  
  ];
};

export default routes;
