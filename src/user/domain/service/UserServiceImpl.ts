import 'reflect-metadata';

import UserService from "./UserService";
import {Service} from "typedi";


@Service('userService')
export default class UserServiceImpl implements UserService {


}