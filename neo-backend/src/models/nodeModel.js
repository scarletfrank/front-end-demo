import Model from './model';

class NodeModel extends Model {
    async insertWithConflict(columns, values) {
        const query = `
            INSERT INTO ${this.table}(${columns})
            VALUES ${values}
            ON CONFLICT (acc) 
            DO NOTHING;
        `;
        return this.pool.query(query);
    }
}

export default NodeModel;