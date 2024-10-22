import {config} from 'dotenv'
config()

import {DataBaseConfigTypes} from "../../../types/DatabaseTypes";

export const developmentConfig: DataBaseConfigTypes = {
	username: process.env.DEVELOPMENT_DATABASE_USER,
	password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
	database: process.env.DEVELOPMENT_DATABASE_DATABASE,
	host: process.env.DEVELOPMENT_DATABASE_HOST,
	dialect: 'mysql',
	logging: false,
	timezone: '+09:00',
	// dateTime String 화
	dialectOptions: {
	  dateStrings: true,
	  typeCast: true,
	},
	query: {
	  raw: true
	},
	pool: {
		max: 20,
		min: 0,
		acquire: 30000,
		idle: 10000,
		waitForConnections: true, // waitForConnections 옵션 활성화
	},
}


export const productionConfig:DataBaseConfigTypes = {
	username: process.env.PRODUCTION_DATABASE_USER,
	password: process.env.PRODUCTION_DATABASE_PASSWORD,
	database: process.env.PRODUCTION_DATABASE_DATABASE,
	host: process.env.PRODUCTION_DATABASE_HOST,
	dialect: 'mysql',
	logging: false,
	timezone: '+09:00',
	pool: {
		max: 20,
		min: 0,
		acquire: 10000,
		idle: 10000,
		waitForConnections: true, // waitForConnections 옵션 활성화
	},
	dialectOptions: {
		dateStrings: true,
		typeCast: true,
	},
	query: {
		raw: true
	}
}


export const testConfig:DataBaseConfigTypes = {
	username: process.env.TEST_DATABASE_USER,
	password: process.env.TEST_DATABASE_PASSWORD,
	database: process.env.TEST_DATABASE_DATABASE,
	host: process.env.TEST_DATABASE_HOST,
	dialect: 'mysql',
	logging: false,
	timezone: '+09:00',
	dialectOptions: {
		dateStrings: true,
		typeCast: true,
	},
	query: {
		raw: true
	},
	pool: {
		max: 20,
		min: 0,
		acquire: 10000,
		idle: 10000,
		waitForConnections: true, // waitForConnections 옵션 활성화,
	},
}