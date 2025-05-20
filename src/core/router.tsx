import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';

import Home from "@pages/home";
import Career from '@pages/career';

import Menu from '@components/Menu';
import Footer from '@components/Footer';

export default function Router() {
  return <HashRouter basename="/">
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
  </HashRouter>
}