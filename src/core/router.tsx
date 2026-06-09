import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import Home from "@pages/home";
import Career from '@pages/career';
import NotFound from '@pages/not-found';

import Menu from '@components/menu';
import Footer from '@components/footer';
import Posts from '@components/posts';

export default function Router() {
  return <BrowserRouter basename="/">
    <Routes>
      <Route element={<>
        <Menu />
        <Outlet />
        <Footer />
      </>}>
        <Route path="" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}