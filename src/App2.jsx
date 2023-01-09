//App2.jsx

import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import App from "./App";
import Main from "./blog/Main";
import List from "./blog/List";
import Write from "./blog/Write";
import Nopage from "./blog/Nopage";
import Detail from "./blog/Detail";

function App2(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = {"/"} element={<App />}>
                    <Route path={"main"} element={<Main />}/>
                    <Route path={"list"} element = {< List />}/>
                    <Route path={"write"} element = {<Write/>}/>
                    <Route path={"detail"} element={<Detail/>}/>
                    <Route path={"*"} element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App2;