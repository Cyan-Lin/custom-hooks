import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LocalStorageHookDemo from "./pages/localStorageHookDemo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>首頁，請到其他demo頁面</>,
  },
  {
    path: "/localStorageHookDemo",
    element: <LocalStorageHookDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
