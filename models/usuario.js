import { DataTypes, Sequelize } from "Sequelize";
exports.UsuarioModel = {
  id: {
    type: DataType.Integer,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  telefono: {
    type: Sequelize.STRING(45)
  },
  fecha_creacion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fecha_actualizacion: {
    type: Sequelize.DATE
  },
  estado: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
};

exports.UsuarioConfig = {
  freezeTableName: true,
  tableName: "usuario",
  timestamps: true,
  createdAt: "fecha_creacion",
  updatedAt: "fecha_actualizacion"
};