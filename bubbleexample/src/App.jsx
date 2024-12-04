import React from 'react';
import BubbleChart from './BarChart';
import { useEffect } from 'react';

useEffect(() => {
  fetch('/data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);

function App() {
    return (
        <div>
            <h1>My Simple Chart</h1>
            <BubbleChart />
        </div>
    );
}

export default App;