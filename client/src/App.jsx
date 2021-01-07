import './tailwind.output.css';
import Navbar from './components/Navbar.js';

const classes = {
  wrapper: 'border-2 m-16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Basic Component</h1>
    </div>
    </div>
  );
}

export default App;
