import React from 'react';
import './App.css';
import SideBar from "./components/SideBar";

const Main = React.lazy(() => import("./components/Main"));

function App() {
  return (
    <div className="App">
      <section className='sidebar-section' id='sidebar'>
        <SideBar/>
      </section>

      <section className='photos-section' id='Photos'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Main/>
        </React.Suspense>
      </section>
    </div>
  );
}

export default App;
