import React, {useState} from 'react';

import {Container} from './styles';

import MainButton from './MainButton';
import Item from './Item';

function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <MainButton getData={getData} />
      {Object.keys(data).length ? <Item data={data} /> : null}
    </Container>
  );
}

export default App;
