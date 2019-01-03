import { UsersService } from "../services/shared/users.service";
import { AuthService } from "../services/shared/authentication.service";
import { AuthController } from "../controllers/auth.controller";
import { UserLoginDTO } from "../models/user-login.dto";


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
});
