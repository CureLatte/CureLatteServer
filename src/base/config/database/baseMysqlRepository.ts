
import { Sequelize } from 'sequelize'
import { developmentConfig, testConfig, productionConfig} from "./dataBaseMysqlConfig";
import { DataBaseError } from "../../../types/ErrorTypes";
import {IsProduction, IsDevelopment} from "../../../utils/comUtils";


let config = testConfig
if(IsDevelopment()){
	config = developmentConfig
} else if(IsProduction()) {
	config = productionConfig
}

if(!config || !config.database || !config.username || !config.password){
	throw new DataBaseError(config)
}


// console.log('======== config =======\n', config)

export const sequelize =  new Sequelize(config.database, config.username, config.password, config)
