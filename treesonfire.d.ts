/// <reference path="mod-reference/modreference.d.ts" />
declare class Mod extends Mods.Mod {
    private treeAnimationDefault;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onUnload(): void;
    onSave(): any;
}
