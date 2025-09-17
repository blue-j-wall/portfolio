import { HashRouter, Route, Routes } from "react-router-dom";

import Portfolio from "../Portfolio";
import Home from "./pages/Home";
import CompSci from "./pages/CompSci";
import Ling from "./pages/Ling";

export default function Router() {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Portfolio />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="projects" element={<CompSci />} />
                <Route path="research" element={<Ling />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    </HashRouter>
}