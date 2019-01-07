import { JwtService } from "@nestjs/jwt";

export class JwtServiceMock extends JwtService{
    sign(payload: string ): string{
        return 'sign';
    }

    verify<T extends object = any>(token: string): T {
        return null;
    }

    decode(token: string): null {
        return null;
    }
}