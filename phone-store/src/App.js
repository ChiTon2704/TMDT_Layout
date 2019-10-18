import React from 'react';
import Nav from './Components/NavComponent';
import SearchNav from './Components/SearchComponent/index';

function App() {
  return (
    <div>

      <div className=" nava bg  ">
        <Nav />
      </div>
      <div>
        <SearchNav />
      </div>
    </div>
  );
}

export default App;
