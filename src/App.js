import './style/App.css';
import './components/ResponsiveAppBar';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import StakeBox from './components/StakeBox';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <StakeBox />
    </div>
  );
}

export default App;
