import {Route, Routes} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import MainNav from './components/MainNav';

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />}/>
        <Route path='/new-meetup' element={<NewMeetupsPage />}/>
        <Route path='/favourites' element={<FavouritesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
