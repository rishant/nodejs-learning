import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App(props) {
  // Behind the seens.
  // React.createElement('div', { className: "App" }, "JSX in react", React.createElement('h2', { className: "App-header"}, "The Indian Dev"))
  console.log("App Component ", props);
  
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default App;
