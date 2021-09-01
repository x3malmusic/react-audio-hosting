import React from 'react';
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import RouterView from "../components/RouterView/RouterView";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Box display="flex">
        <Sidebar />
        <RouterView>
          {children}
        </RouterView>
      </Box>
    </>
  );
}