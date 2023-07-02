import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AppRouter from "./routers/AppRouter";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomAppThemeProvider>
        <AppRouter />
      </CustomAppThemeProvider>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
