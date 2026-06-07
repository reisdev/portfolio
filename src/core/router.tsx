import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import Home from "@pages/home";
import Career from '@pages/career';

import Menu from '@components/menu';
import Footer from '@components/footer';
import AboutMe from '@pages/about';
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
        <Route path='about' element={<AboutMe />} />
      </Route>
    </Routes>
  </BrowserRouter>
}