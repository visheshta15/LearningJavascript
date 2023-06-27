import React, {useState} from 'react';
import PopulationScreen from './component/PopulationScreen';
import logo from './image/logo.png'
import './App.css'
import Sortarray from './component/Sortarray';
import UseMemo from './memo/UseMemo';
import UseCallback from './component/UseCallback';


function App({datas}) {
const [data, setdata] = useState(datas)

 const sortByUpvotes = () => {
  var newArticles = [];
  Object.assign(newArticles, data);
  newArticles.sort((a, b) => ((a.upvotes > b.upvotes) ? 1 : (a.upvotes < b.upvotes) ? -1 : 0  ))
  setdata(newArticles);
}

const sortByDates = () => {
  var newArticles = [];
  Object.assign(newArticles, data);
  newArticles.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate > bDate) {
      return -1;
    }
    if (aDate < bDate) {
      return 1;
    }
    return 0;
  })

  setdata(newArticles);
}

  return <div className='app'>
    <div className='app_header'>
      <img src={logo} alt="" />
      <h4>World <br /> Population</h4>
      {/* <a href="https://www.javatpoint.com" target="_blank"> no void        1</a> <br /><br />
      <a href="javascript:void(0);https://www.javatpoint.com">  void</a> */}
    </div>
    {/* <PopulationScreen /> */}

      <button onClick={sortByUpvotes}>click votes</button>
      <button onClick={sortByDates}>click dates</button>
      <Sortarray data={data}/>
      <UseMemo />
      <UseCallback />
  </div>;
}

export default App;
