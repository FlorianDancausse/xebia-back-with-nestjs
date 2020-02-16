export const getInstructions_file = {
    "lawn": {
        "start": {
            "x": 0,
            "y": 0
        },
        "end": {
            "x": 5,
            "y": 5
        }
    },
    "mowers": [
        {
            "position": {
                "x": 1,
                "y": 2
            },
            "direction": "N",
            "instruction": "GAGAGAGAA"
        },
        {
            "position": {
                "x": 3,
                "y": 3
            },
            "direction": "E",
            "instruction": "AADAADADDA"
        }
    ]
}

export const getInstructions_result = [
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
]
