import React from 'react';
import Graphin from '@antv/graphin';
import { Toolbar } from '@antv/graphin-components';
import { useReadCypher } from "use-neo4j";
import NeoG6 from "./neog6";
import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS

const Core = () => {
  // const data = Utils.mock(10).circle().graphin();
  const { cypher, error, loading, records } = useReadCypher(
    "MATCH (n:Person)-[re]-(b) RETURN n, re, b LIMIT 10"
  );
  // Default to Loading Message
  let result = <div className="ui active dimmer">Loading...</div>;
  let g6 = new NeoG6();
  // Was there an error om the query?
  if (error) {
    result = <div className="ui negative message">{error.message}</div>;
  } else if (!loading) {
    if (records instanceof Array) {
      g6.toG6Format(records)
    }

    result = (
      <div>
        <Graphin data={g6.data} layout={{ name: "concentric" }}>
          <Toolbar />
        </Graphin>
      </div>
    );
  }
  return (
    <div className="App">
      <pre>{cypher}</pre>
      {result}
    </div>
  );
};

export default Core;