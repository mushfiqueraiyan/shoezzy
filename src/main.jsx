import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";

const query = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={query}>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
