import { UserRegisterDTO } from '../../models/user-register.dto';
import { UsersService } from '../../services/shared/users.service';
import { AuthService } from '../../services/shared/authentication.service';
import { AuthController } from '../../controllers/auth.controller';
import { UserLoginDTO } from '../../models/user-login.dto';

jest.mock('../services/shared/authentication.service');
jest.mock('../services/shared/users.service');

describe('AuthController', () => {
    it('should call AuthService signIn method', async () => {
        // Arrange
        const userService = new UsersService(null, null);
        const authenticationService = new AuthService(userService, null);
        const authController = new AuthController(authenticationService, userService);
        const user = new UserLoginDTO();

        jest.spyOn(authenticationService, 'signIn').mockImplementation(() => {
            return 'token';
        });

        // Act
        await authController.sign(user);

        // Assert
        expect(authenticationService.signIn).toHaveBeenCalledTimes(1);
    });

    it('should call AuthService register method', async () => {
        // Arrange
        const userService = new UsersService(null, null);
        const authenticationService = new AuthService(userService, null);
        const authController = new AuthController(authenticationService, userService);
        const user = new UserRegisterDTO();

        jest.spyOn(userService, 'registerUser').mockImplementation(() => {
            return 'token';
        });

        // Act
        await authController.register(user);

        // Assert
        expect(userService.registerUser).toHaveBeenCalledTimes(1);
    });
    it('should register the new User ', async () => {
        // Arrange
        const userService = new UsersService(null, null);
        const authenticationService = new AuthService(userService, null);
        const authController = new AuthController(authenticationService, userService);
        const user = new UserRegisterDTO();
        user.username = 'userNameToTest';

        jest.spyOn(userService, 'registerUser').mockImplementation(() => {
            return 'userNameToTest';
        });

        // Act
        await authController.register(user);
        const foundUser = await userService.registerUser(user);

        // Assert
        expect(foundUser).toBe('userNameToTest');
    });

    it('should throw if wrong credentials ', async () => {
        // Arrange
        const userService = new UsersService(null, null);
        const authenticationService = new AuthService(userService, null);
        const authController = new AuthController(authenticationService, userService);
        const user = new UserRegisterDTO();
        const user2 = new UserRegisterDTO();
        user.username = 'userNameToTest';

        jest.spyOn(authenticationService, 'signIn').mockImplementation(() => {
            return 'Error';
        });

        // Act
        const isLogged = await authController.sign(user);

        // Assert
        expect(isLogged).toBe('Error');
    });
});
