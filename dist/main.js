"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const errors_interceptor_1 = require("./error/errors.interceptor");
const http_exception_filter_1 = require("./error/http-exception.filter");
require('../patch.js');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new errors_interceptor_1.ErrorsInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map