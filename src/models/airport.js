'use strict'
import { Model, DataTypes } from 'sequelize'
export default (sequelize) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City, {
        foreignKey: 'city_id',
      })
      Airport.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
        onDelete: 'cascade',
      })
      Airport.hasMany(models.Flight, {
        foreignKey: 'arrivalAirportId',
        onDelete: 'cascade',
      })
    }
  }
  Airport.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      code: { type: DataTypes.STRING, allowNull: false, unique: true },
      address: { type: DataTypes.STRING, unique: true },
      city_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Airport',
    }
  )
  return Airport
}
