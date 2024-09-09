import {Dialect} from "sequelize";

export type DataBaseConfigTypes  = {
	username: string|undefined,
	password: string|undefined,
	database: string|undefined,
	host: string|undefined,
	dialect: Dialect,
	logging: boolean,
	timezone: string,
	pool: {
		max: number,
		min: number
		acquire: number,
		idle: number,
		waitForConnections: boolean, // waitForConnections 옵션 활성화
	},
	dialectOptions: {
		dateStrings: boolean,
		typeCast: boolean,
	},
	query: {
		raw: boolean
	},
}