import React from 'react';
import ReactDOM from 'react-dom';
import Table from './lib/Table';
import data from "./data/sample-data.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Table data={data} />
    </div>
  </React.StrictMode>
);
