import React from 'react';
import Graphin, { Utils } from '@antv/graphin';
import { Toolbar } from '@antv/graphin-components';

import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS

const Core = () => {
  const data = Utils.mock(10).circle().graphin();
  return (
    <div className="App">
      <Graphin data={data} layout={{ name: 'concentric' }}>
        <Toolbar />
      </Graphin>
    </div>
  );
};

export default Core;