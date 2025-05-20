import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import Home from "@pages/home";
import Career from '@pages/career';

import Menu from '@components/Menu';
import Footer from '@components/Footer';

export default function Router() {
  return <BrowserRouter basename="/">
    <Routes>
      <Route element={<>
        <Menu />
        <Outlet />
        <Footer />
      </>}>
        <Route path="" element={<Home />} />
        <Route path="career" element={<Career />} />
      </Route>
    </Routes>
  </BrowserRouter>
}