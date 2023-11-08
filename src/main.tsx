import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LocalStorageHookDemo from "./pages/localStorageHookDemo.tsx";
import UpdateEffectHookDemo from "./pages/updateEffectHookDemo.tsx";
import App from "./App.tsx";
import ToggleHookDemo from "./pages/toggleHookDemo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/localStorageHookDemo",
    element: <LocalStorageHookDemo />,
  },
  {
    path: "/updateEffectHookDemo",
    element: <UpdateEffectHookDemo />,
  },
  {
    path: "/toggleHookDemo",
    element: <ToggleHookDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
