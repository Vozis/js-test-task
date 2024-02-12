import React, { useEffect, useState } from 'react';
import './App.css';
import { IData, IListItem } from './types/types';
import List from './components/List';
import { arrayToTree } from './utils/utils';

function App() {
  const [jsonData, setJsonData] = useState<IListItem[] | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json() as Promise<IData>)
      .then(data => {
        const res = arrayToTree(data.services);
        setJsonData(res);
      });
  }, []);

  return (
    <div className="App">
      <h1>Тестовое задание</h1>
      {jsonData && <List items={jsonData} />}
    </div>
  );
}

export default App;
