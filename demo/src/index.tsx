import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      hello
      <a href="https://itcast.cn">itcast</a>
    </div>
  );
};
render(<App />, document.getElementById('app'));
