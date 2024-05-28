import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import {
  Account,
  Booking,
  Cabins,
  Dashboard,
  Login,
  PageNotFound,
  Settings,
  Users,
} from "./pages";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";
import BookingDetailPage from "./pages/BookingDetailPage";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
// import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Booking />} />
              <Route
                path="bookings/:bookingId"
                element={<BookingDetailPage />}
              />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="users" element={<Users />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;
