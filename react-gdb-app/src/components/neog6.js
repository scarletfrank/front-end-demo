import { isNode, isRelationship, isInt} from 'neo4j-driver-core'

export default class NeoG6 {
    _nodes = {};
	_edges = {};
    _data = {};

    /**
     * Get current vis nodes from the graph
     */
    get nodes() {
      return this._data.nodes;
    }

    /**
     * Get current vis edges from the graph
     */
    get edges() {
      return this._data.edges;
    }
    get data() {
      // map to list
      const data = {
        // 点集
        nodes: [],
        // 边集
        edges: [],
        // 表示一条从 node1 节点连接到 node2 节点的边
      };
      let a = new Map(Object.entries(this._nodes))
      let b = new Map(Object.entries(this._edges))
      for (const v of a.values()){
        data.nodes.push(v)
      }
      for (const v of b.values()){
        data.edges.push(v)
      }
      return data;
    }
    buildNode =(neo4jNode) =>{
        let node = {id: neo4jNode.identity.toString(), labels: neo4jNode.labels[0]}
        // console.log(neo4jNode.properties)
        let prop = neo4jNode.properties
        for (const k in prop){
            node[k] = isInt(prop[k]) ? prop[k].toInt() : prop[k]
            // if prop[k] isNeo4jInteger, cast it to Integer
        }
        // override
        this._nodes[neo4jNode.identity.toInt()] = node
      }
      
    buildEdge = (neo4jEdge) => {
        // console.log('get a edge')
        let edge = {source: neo4jEdge.start.toString(), target: neo4jEdge.end.toString()}
        let prop = neo4jEdge.properties
        for (const k in prop){
            edge[k] = isInt(prop[k]) ? prop[k].toInt() : prop[k]
            // if prop[k] isNeo4jInteger, cast it to Integer
        }
        this._edges[neo4jEdge.identity.toInt()] = edge
      }
      
    toG6Format = (records)  => {
        records.forEach((record) => {
          Object.values(record.toObject()).map(async (v) => {
            if (isNode(v)) {
              this.buildNode(v);
              
            } else if (isRelationship(v)) {
              this.buildEdge(v);
            } else if (v instanceof Array) {
              for (let obj of v) {
                if (isNode(obj)) {
                  this.buildNode(obj);
                } else if (isRelationship(obj)) {
                  this.buildEdge(obj);
                }
              }
            } else {
              console.log('invalid format')
            }
          })
        })
        this._data = {nodes: this._nodes, edges: this._edges}
    } 
}