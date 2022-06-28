import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Main from "./components/Main/Main";
import Menu from './components/Main/Menu/Menu';
import Db from './components/Main/Db';
import Menu_table from './components/admin-panel/views/Menu-table/Menu_table';
import Reviews from './components/Main/Reviews/Reviews';
import ReviewsAdd from './ReviewsAdd';
import ReviewsView from './ReviewsView';
import Feedback from './components/Main/Feedback/Feedback';
function App(){
    return(

      <div className = "App">
        <BrowserRouter>
            <Routes>
                {/* <Route element = {<Menu_table />}>
                </Route> */}
                <Route  path = "/reviewsadd"element = {<ReviewsAdd />}></Route>
                <Route  path = "/reviewsview"element = {<ReviewsView />}></Route>
            
                <Route element = {<Main />}>
                    {/* <Route path = "/" element = {<Home />} /> */}
                    <Route path = "/menu" element = {<Menu />} />
                    <Route path = "/db" element = {<Db />} />
                    <Route path = "/reviews" element = {<Reviews />} />
                    <Route path = "/feedback" element = {<Feedback />} />
                    
                </Route>
                
            </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App;