'use strict';

import { literal, Model } from 'sequelize';

interface NoteAttributes {
  id: string;
  name: string;
  content: string;
  is_archived: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Note extends Model<NoteAttributes>
  implements NoteAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    content!: string;
    is_archived!: boolean;

    static associate(models: any) {
      // define association here
      Note.belongsTo(models.Category);
    }
  }
  Note.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Note',
    updatedAt: false
  });
  return Note;
};