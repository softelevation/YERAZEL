import './App.css';
import {Topbar} from './components/Topbar/topbar';
import {Banner} from './components/Banner/banner';
import {Howgetrebate} from './components/Howgetrebate/howgetrebate';
import Popularplaces from './components/Popularplaces/popularplaces';
import Articlestips from './components/Articlestips/articlestips';
import Browseproperties from './components/Browseproperties/browseproperties';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
       <Topbar/>
       <Banner/>

       <Howgetrebate/>
       <Popularplaces/>
       <Articlestips/>
       <Browseproperties/>
       <Footer/>
    </div>
  );
}

export default App;
