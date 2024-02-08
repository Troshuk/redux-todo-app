import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import { AppBar } from "components";

export const AppLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
