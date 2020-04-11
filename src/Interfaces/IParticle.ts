import type { RotateDirection } from "../Enums/RotateDirection";
import type { IStroke } from "./Options/Particles/IStroke";
import type { ICoordinates } from "./ICoordinates";
import type { IRgb } from "./IRgb";
import type { IVelocity } from "./IVelocity";
import type { ShapeType } from "../Enums/ShapeType";
import type { IParticleImage } from "./IParticleImage";
import type { ISize } from "./ISize";
import type { IOpacity } from "./IOpacity";
import type { IShapeValues } from "./Options/Particles/Shape/IShapeValues";
import type { IBubbleParticleData } from "./IBubbleParticleData";
import type { MoveDirection } from "../Enums/MoveDirection";

export interface IParticle {
	randomIndexData?: number;

	readonly angle: number;
	readonly bubble: IBubbleParticleData;
	readonly color: IRgb | undefined;
	readonly close: boolean;
	readonly direction: MoveDirection;
	readonly fill: boolean;
	readonly image?: IParticleImage;
	readonly initialPosition?: ICoordinates;
	readonly initialVelocity: IVelocity;
	readonly offset: ICoordinates;
	readonly opacity: IOpacity;
	readonly position: ICoordinates;
	readonly rotateDirection: RotateDirection;
	readonly shadowColor: IRgb | undefined;
	readonly shape?: ShapeType | string;
	readonly shapeData?: IShapeValues;
	readonly size: ISize;
	readonly stroke: IStroke;
	readonly strokeColor: IRgb | undefined;
	readonly velocity: IVelocity;
}