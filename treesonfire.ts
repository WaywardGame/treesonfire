/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {

	private treeAnimationDefault: boolean;

	public onInitialize(saveDataGlobal: any): any {
		// image overrides are defined in mod.json
	}

	public onLoad(saveData: any): void {
		// make the tree animate
		this.treeAnimationDefault = Doodad.defines[DoodadType.Tree].animated;
		Doodad.defines[DoodadType.Tree].animated = true;
	}

	public onUnload(): void {
		// reset doodad definition
		Doodad.defines[DoodadType.Tree].animated = this.treeAnimationDefault;
	}

	public onSave(): any {
	}
}
