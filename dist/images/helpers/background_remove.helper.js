"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundRemove = void 0;
const sharp = require("sharp");
const rembg_node_1 = require("rembg-node");
const backgroundRemove = async (path) => {
    const input = sharp(path);
    const rembg = new rembg_node_1.Rembg({ logging: true });
    const output = await rembg.remove(input);
    await output.trim().webp().toFile(path);
};
exports.backgroundRemove = backgroundRemove;
//# sourceMappingURL=background_remove.helper.js.map