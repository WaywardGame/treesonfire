var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.apply(this, arguments);
    }
    Mod.prototype.onInitialize = function (saveDataGlobal) {
    };
    Mod.prototype.onLoad = function (saveData) {
        this.treeAnimationDefault = Doodad.defines[DoodadType.Tree].animated;
        Doodad.defines[DoodadType.Tree].animated = true;
    };
    Mod.prototype.onUnload = function () {
        Doodad.defines[DoodadType.Tree].animated = this.treeAnimationDefault;
    };
    Mod.prototype.onSave = function () {
    };
    return Mod;
}(Mods.Mod));
//# sourceMappingURL=treesonfire.js.map