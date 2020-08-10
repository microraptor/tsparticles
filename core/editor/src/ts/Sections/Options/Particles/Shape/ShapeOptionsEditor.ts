import type { Container } from "tsparticles/dist/Core/Container";
import type { IShape } from "tsparticles/dist/Options/Interfaces/Particles/Shape/IShape";
import { EditorSelectInput, EditorGroup } from "object-gui";
import { EditorBase } from "../../../../EditorBase";

export class ShapeOptionsEditor extends EditorBase {
    public group!: EditorGroup;
    private options!: IShape;

    constructor(particles: Container) {
        super(particles);
    }

    public addToGroup(parent: EditorGroup): void {
        this.group = parent.addGroup("shape", "Shape");
        this.options = this.group.data as IShape;

        this.addProperties();
    }

    private addProperties(): void {
        const particles = this.particles;
        const options = this.options;

        const selectType = this.group.addProperty("type", "Type", options.type, "select", async () => {
            await particles.refresh();
        }) as EditorSelectInput;

        for (const key of particles.drawers.keys()) {
            selectType.addItem(key);
        }
    }
}