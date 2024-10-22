import UserService from "../domain/service/UserService";
import {Inject, Service} from "typedi";

@Service('userFacade')
export default class  UserFacade{
    userService: UserService;

    constructor(@Inject('userService') userService: UserService){
        this.userService = userService;
    }

}