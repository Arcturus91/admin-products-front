import {
RegisterProductPage,
  HomePage,
  UpdateProductPage
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
    { path:"/productupdate/:productId" ,
    element : <UpdateProductPage />}
  
  ];
};

export default routes;
