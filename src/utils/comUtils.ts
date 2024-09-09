import {config} from 'dotenv'
config()

export function IsProduction(){
    return process.env.ENV==='production'
}

export function IsDevelopment(){
    return process.env.ENV==='development'
}