// app/components/ToastProvider.jsx (for App Router)
// or components/ToastProvider.jsx (for Pages Router)

"use client"; // This directive marks the component as a Client Component

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" // Or "dark", "colored"
    />
  );
}