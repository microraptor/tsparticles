import type { IColor } from "../../../../Core/Interfaces/IColor";

export interface ILinksTriangle {
    color?: string | IColor;
    enable: boolean;
    frequency: number;
    opacity?: number;
}
