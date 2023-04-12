import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "pages/home";

export default function Router() {
    return <HashRouter basename="/">
    <Routes>
      <Route path="" element={<Home/>} />
    </Routes>
  </HashRouter>
}