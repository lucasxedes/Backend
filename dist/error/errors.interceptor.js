"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)((err) => {
            const code = err.code;
            console.log('code', code);
            console.log(Object.keys(err));
            console.log('meta', err.meta);
            console.log(err.name);
            console.log(err.response);
            console.log(Object.keys(context));
            console.log('args', context.getArgs());
            console.log('args', context.getArgs()[0].method);
            if (err.name.includes('HttpException')) {
                throw new common_1.NotFoundException('Registro não encontrando.');
            }
            switch (code) {
                case 'P2002':
                    if (err.message.includes('name')) {
                        throw new common_1.ConflictException('Um registro com esse nome já existe.');
                    }
                case 'P2025':
                    throw new common_1.NotFoundException('Registro não encontrando.');
                default:
                    throw new common_1.BadGatewayException();
            }
        }));
    }
};
ErrorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorsInterceptor);
exports.ErrorsInterceptor = ErrorsInterceptor;
//# sourceMappingURL=errors.interceptor.js.map