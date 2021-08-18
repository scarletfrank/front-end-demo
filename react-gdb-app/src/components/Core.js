import React from 'react';
import Graphin, {Utils} from '@antv/graphin';
// mock data
const data = Utils.mock(10).circle().graphin();
export default () => {
  return <Graphin data={data} />;
};
