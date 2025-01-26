import "./App.css"

import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
  
} from 'react-router-dom';



const App =()=> {
  
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={ <News             setProgress={setProgress} apikey={apiKey} key="general"   category="general" pageSize={20} />}>Home </Route>
          <Route exact path="/business"     element={<News  setProgress={setProgress} apikey={apiKey} key="business"   category="business" pageSize={20} />}>business </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment"   category="entertainment" pageSize={20}/>        }>entertainment</Route>
          <Route exact path="/health"       element={<News  setProgress={setProgress} apikey={apiKey}   key="health"    category="health" pageSize={20} />               }>health </Route>
          <Route exact path="/science"      element={<News  setProgress={setProgress} apikey={apiKey}  key="science"     category="science" pageSize={20} />             }>science </Route>
          <Route exact path="/sports"       element={<News  setProgress={setProgress} apikey={apiKey}   key="sports"     category="sports" pageSize={20}/>              }>sports </Route>
          <Route exact path="/technology"   element={ <News setProgress={setProgress} apikey={apiKey}  key="technology"      category="technology" />        }>technology </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
export default App;

// props are read only if you want a componnent chance continously or with time without
// loading a page then use state method to easily change component whenever you want
// hooks are features of class based components used in function based components
// like useState hook by using hooks you can use features of class based components
// in function based component function should declare as constant