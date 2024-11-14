import SearchTool from './containers/Search/SearchTool.tsx';
import ShowInfo from './containers/ShowInfo/ShowInfo.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
      <header className="bg-body-secondary p-3 mb-4">
        <h2 className="text-dark">TV Shows</h2>
      </header>
      <SearchTool/>
      <Routes>
        <Route element={<ShowInfo/>} path="/shows/:id"></Route>
      </Routes>
    </Router>
  )
}

export default App
