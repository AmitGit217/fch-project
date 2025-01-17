import './App.css';
import Biography from './components/Biography';
import Albums from './components/Albums';
import VideoEmbed from './components/Video';

function App() {
  return (
    <>
      <header>
        <h1>Vicente Amigo</h1>
      </header>
      <main>
        <Biography />
        <Albums />
        <VideoEmbed />
      </main>
    </>
  );
}

export default App;
