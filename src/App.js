import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Test from './components/Test';

const TopicsPage = (props) => {
  console.log(props);
  useEffect(() => {
    document.title = 'Topics | GFS';
  }, []);
  return (
    <div>
      <h1>Topics</h1>
    </div>
  );
};

const TopicsDetails = (props) => {
  console.log(props);
  const url = props.match.url;
  useEffect(() => {
    document.title = 'Topics Details | GFS';
  }, []);
  return (
    <div>
      <h1>Topics Details</h1>
      <Link to={`${url}/69`}>Topic 69</Link>
    </div>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <Test />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsPage} />
        <Route path="/topics/:topicId" component={TopicsDetails} />
      </Switch>
    </div>
  );
}

export default App;
