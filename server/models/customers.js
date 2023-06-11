import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cust_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cust_name: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cust_city: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "customers_pkey",
        unique: true,
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
  }
}
