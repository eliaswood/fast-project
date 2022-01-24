import { useState, useEffect } from 'react'
import movie from './api/movies';
import './App.css'
import SearchBar from './components/SearchBar';
import PosterList from './components/PosterList';
import _ from 'lodash';
import styled from 'styled-components'
import PlaylistContextProvider from './context/playlist';
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import PlaylistPage from './pages/PlayListPage';

const AppWrapper = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <AppWrapper>
      <PlaylistContextProvider>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </Routes>
      </PlaylistContextProvider>
    </AppWrapper>
  )
}

export default App
