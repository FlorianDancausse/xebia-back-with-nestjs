/**
 * Even google developpers use jsdoc in their ts files.
 */

/** nest */
import { Injectable } from '@nestjs/common';
/** end nest */

/** interfaces */
import { MowersInstructionsInterface } from './interfaces/mowers-instructions.interface';
import { MowerInterface } from './interfaces/mower.interface';
import { AxisInterface } from './interfaces/axis.interface';
import { LawnInterface } from './interfaces/lawn.interface';
/** end interfaces */

/** types */
import { DirectionType } from './types/direction.type';
import { InstructionType } from './types/instruction.type';
/** end types */

@Injectable()
export class MowersService {
    /**
     * @param mowersInstructions The sent instructions
     *
     * @returns A list of mowers with their new position/direction
     */
    public getInstructions(file: any): Promise<MowerInterface[]> {
        return new Promise(async (resolve, reject) => {
            const mowersInstructions: MowersInstructionsInterface = JSON.parse(file.buffer.toString());
            const promises = [];
            for(const mowerIndex in mowersInstructions.mowers) {
                let currentMower = mowersInstructions.mowers[mowerIndex]
                const instructions: any = currentMower.instruction.split('');
                promises.push(this.giveInstructions(mowersInstructions.lawn, currentMower, instructions))
            }
            try {
                const res = await Promise.all(promises);
                return resolve(res);
            }
            catch (err) {
                return reject(err);
            }
        });
    }

    /**
     * @param letter The letter to check
     *
     * @returns true while the letter is A, D or G
     */
    private checkInstructionLetter(letter: string) {
        return (letter === 'A' || letter === 'D' || letter === 'G');
    }

    /**
     * @param lawn The lawn properties
     * @param mower The current mower to move
     * @param instruction A list of instructions
     *
     * @returns The mower with new position/direction
     */
    private giveInstructions(lawn: LawnInterface, mower: MowerInterface, instructions: InstructionType[]): Promise<MowerInterface> {
        return new Promise((resolve, reject) => {
            for(const currentInstruction of instructions) {
                if (!this.checkInstructionLetter(currentInstruction)) {
                    return reject('instruction letters should only be A/D/G')
                }
                switch (currentInstruction) {
                    case 'A':
                        const nextPosition = this.getNextPosition(mower.direction, mower.position);
                        if (
                            nextPosition.x <= lawn.end.x ||
                            nextPosition.y <= lawn.end.y ||
                            nextPosition.x >= lawn.start.x ||
                            nextPosition.x >= lawn.start.y
                        ) {
                            mower.position = nextPosition;
                        }
                        break;
                    case 'D':
                        mower.direction = this.getNewDirection(mower.direction, 'D');
                        break
                    case 'G':
                        mower.direction = this.getNewDirection(mower.direction, 'G');
                        break;
                }
            }
            return resolve(mower);
        });
    }

    /**
     * @param direction The current direction
     * @param position The current position
     *
     * @returns The new position
     */
    private getNextPosition(direction: DirectionType, position: AxisInterface): AxisInterface {
        switch (direction) {
            case 'N':
                return {x: position.x, y: position.y + 1}
            case 'E':
                return {x: position.x + 1, y: position.y}
            case 'S':
                return {x: position.x, y: position.y - 1}
            case 'W':
                return {x: position.x - 1, y: position.y}
        }
    }

    /**
     * @param direction The current direction
     * @param instruction The current instruction

     * @returns The new direction
     */
    private getNewDirection(direction: DirectionType, instruction: InstructionType): DirectionType {
        switch (instruction) {
            case 'D':
                if (direction === 'N') {
                    return 'E';
                } else if (direction === 'E') {
                    return 'S';
                } else if (direction === 'S') {
                    return 'W';
                } else if (direction === 'W') {
                    return 'N';
                }
              break;
            case 'G':
                if (direction === 'N') {
                    return 'W';
                } else if (direction === 'W') {
                    return 'S';
                } else if (direction === 'S') {
                    return 'E';
                } else if (direction === 'E') {
                    return 'N';
                }
            break
        }
    }
}
