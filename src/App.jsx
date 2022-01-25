import PlaylistContextProvider from './context/playlist';
import SearchHistoryContextProvider from './context/searchHistory';
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/searchPage/SearchPage';
import PlaylistPage from './pages/playlistPage/PlaylistPage';
import { AppWrapper } from './App.styles';

function App() {
  return (
    <AppWrapper>
      <PlaylistContextProvider>
        <SearchHistoryContextProvider>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
          </Routes>
        </SearchHistoryContextProvider>  
      </PlaylistContextProvider>
    </AppWrapper>
  )
}

export default App
