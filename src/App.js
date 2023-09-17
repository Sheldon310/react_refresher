import React from "react";

import { Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetups/>}/>
        <Route exact path="/new-meetup" element={<NewMeetup/>}/>
        <Route exact path="/favorites" element={<FavoritesPage/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Layout>
  );
}

export default App;
