define(["require", "exports"], function (require, exports) {
    "use strict";
    class Mod extends Mods.Mod {
        onInitialize(saveDataGlobal) {
        }
        onLoad(saveData) {
            this.treeAnimationDefault = Doodad.defines[DoodadType.Tree].animated;
            Doodad.defines[DoodadType.Tree].animated = true;
        }
        onUnload() {
            Doodad.defines[DoodadType.Tree].animated = this.treeAnimationDefault;
        }
        onSave() {
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mod;
});
//# sourceMappingURL=treesonfire.js.map