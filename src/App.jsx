import DebateRoulette from './components/DebateRoulette';
import Think from './components/Think';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      {/* <DebateRoulette /> */}
      <ErrorBoundary>
        <Think />
      </ErrorBoundary>
    </div>
  );
}

export default App;
