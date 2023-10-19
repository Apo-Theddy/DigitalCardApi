"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = exports.renameImage = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const path_1 = require("path");
const renameImage = (req, file, callback) => {
    const filename = file.originalname;
    const ext = (0, path_1.extname)(filename);
    const uniqueName = (0, uuid_1.v4)();
    const newName = `${uniqueName}${ext}`;
    callback(null, newName);
};
exports.renameImage = renameImage;
const fileFilter = (req, file, callback) => {
    let extensions = /\.(jpg|jepg|png|gif)$/;
    if (!file.originalname.match(extensions)) {
        return callback(new common_1.ConflictException("Invalid format type"), false);
    }
    callback(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=images.helper.js.map