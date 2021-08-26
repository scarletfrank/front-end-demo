import Model from './model';

class EdgeModel extends Model {
    async insertWithConflict(columns, values) {
        const query = `
            INSERT INTO ${this.table}(${columns})
            VALUES ${values}
            ON CONFLICT (seq) 
            DO NOTHING;
        `;
        return this.pool.query(query);
    }
}

export default EdgeModel;