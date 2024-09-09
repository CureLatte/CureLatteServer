import {DataBaseConfigTypes} from "./DatabaseTypes";

export class DataBaseError extends Error {
    constructor(databaseConfig: DataBaseConfigTypes) {
        super();
        this.message = ''
    }


}