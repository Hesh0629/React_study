import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      // 불행히도 news-api측에서 localhost가 아니면 사용 못하도록 막아버렸다. 현재 상황에서는 할 수 있는게 없다
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d81b0e5584414c55bb8e7543639e000b'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>load</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default App;