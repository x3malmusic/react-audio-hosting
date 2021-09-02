import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <ReactNotification />
      <ProtectedRoute />
    </>
  );
}