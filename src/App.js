// Import data
import SearchBar from './Components/Searchbar.jsx';
import SideBar from './Components/SideBar.jsx';
import Listing from './Components/Listing.jsx';
// Import components
import './App.css';


function App(){
  return (
    <div>
      <h1>Hi Craigslist Visitor</h1>
      <div className="App">
        <SearchBar/>
        <SideBar/>
        <Listing/>
      </div>
    </div>
  );
}

export default App;
