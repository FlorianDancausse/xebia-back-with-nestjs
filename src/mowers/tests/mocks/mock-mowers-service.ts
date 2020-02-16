export class MowersServiceMock {
  getInstructions(file: any) {
    return [
      {
          "position": {
              "x": 1,
              "y": 3
          },
          "direction": "N",
          "instruction": "GAGAGAGAA"
      },
      {
          "position": {
              "x": 5,
              "y": 1
          },
          "direction": "E",
          "instruction": "AADAADADDA"
      }
    ];
  }
}
