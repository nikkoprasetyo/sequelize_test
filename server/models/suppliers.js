import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class suppliers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    supr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supr_name: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    supr_contact_name: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    supr_city: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "suppliers_pkey",
        unique: true,
        fields: [
          { name: "supr_id" },
        ]
      },
    ]
  });
  }
}
