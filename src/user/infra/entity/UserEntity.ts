import {Sequelize, Model, DataTypes} from 'sequelize'
import {sequelize} from "../../../base/config/database/baseMysqlRepository";

class UserModel extends Model {
    static initTable(sequelize: Sequelize) {

        return super.init({
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nick_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
			login_date: {
				type: DataTypes.DATE,
				allowNull: false,
			}
		}, {
			sequelize,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at',
			timestamps: true,
			underscored: true,
			modelName: 'UserModel',
			tableName: 'user',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		})

    }

}

const userEntity = UserModel

userEntity.initTable(sequelize)

export default userEntity