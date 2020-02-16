/** interfaces */
import { AxisInterface } from "./axis.interface";
/** end interfaces */

/** types */
import { InstructionType } from "../types/instruction.type";
import { DirectionType } from "../types/direction.type";
/** end types */

export interface MowerInterface {
    position: AxisInterface;
    direction: DirectionType;
    instruction: InstructionType;
}