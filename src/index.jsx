import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

<<<<<<< HEAD
const App = () => <div className="test">All the REACT are belong to us!</div>;

const root = createRoot(document.getElementById('main'));
root.render(<App />);
=======
function App() {
  return (
    <div className="test">All the REACT are belong to us!</div>
  );
}
// const App = () => <div className="test">All the REACT are belong to us!</div>;

const root = createRoot(document.getElementById('main'));
root.render(<App />);
>>>>>>> 6df1997f557d33cfe94a305016d4cee522bdbff9
