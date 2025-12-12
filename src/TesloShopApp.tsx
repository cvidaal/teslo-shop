import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const TesloShopApp = () => {
  const queryClient = new QueryClient();

  return (
    //! Esto es para usar las devtools de tanstack query en nuestra web
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
