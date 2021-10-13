import './App.css';
import Counter from './Counter';
import CounterShouldUpdate from './CounterShouldUpdate'

function App() {
  return (
    // componentshouldupdate re render only if  the props passes to it changes

    // It by default it returns true and if it returns false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.

    <div className="App">
      <h1>Counter App without using Component Should Update </h1>
      <Counter />

      <h1>Counter App using Component Should Update </h1>
      <CounterShouldUpdate />
    </div>
  );
}

export default App;
