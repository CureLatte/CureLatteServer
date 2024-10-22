import UserServiceImpl from "../user/domain/service/UserServiceImpl";
import UserControllerImpl from "../user/ui/UserControllerImpl";
import UserFacade from "../user/application/UserFacade";


const userService = new UserServiceImpl()

const userFacade = new UserFacade(userService)

const userController = new UserControllerImpl(userFacade)




export {
    userService,
    userFacade,
    userController
}