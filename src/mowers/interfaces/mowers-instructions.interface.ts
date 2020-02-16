import { LawnInterface } from "./lawn.interface";
import { MowerInterface } from "./mower.interface";

export interface MowersInstructionsInterface {
    lawn: LawnInterface;
    mowers: MowerInterface[];
}


