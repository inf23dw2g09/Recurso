const config = require("../configs/env");

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "OAuth2 Pokemon API",
    version: "1.0.0",
    description:
      "API de Pokemon desenvolvida pelo Grupo09 de Desenvolvimento Web II",
    contact: { name: "inf-23-dw2-g09" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  paths: {
    "/Pokemon/Count": {
      get: {
        tags: ["PokemonController"],
        summary: "Pokemon Count",
        operationId: "countPokemon",
        responses: {
          200: {
            description: "Number of Pokemon model instances",
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
    },
    "/Pokemon": {
      get: {
        tags: ["PokemonController"],
        summary: "Retrieve Pokemon",
        operationId: "retrievePokemon",
        responses: {
          200: {
            description: "Array of Pokemon model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Pokemon",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
      post: {
        tags: ["PokemonController"],
        summary: "Create Pokemon",
        operationId: "createPokemon",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pokemon",
              },
              examples: {
                PokemonInsert: {
                  $ref: "#/components/examples/PokemonInsert",
                },
                PokemonExample01: {
                  $ref: "#/components/examples/PokemonExample01",
                },
                PokemonExample02: {
                  $ref: "#/components/examples/PokemonExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Pokemon",
              },
              examples: {
                PokemonExample01: {
                  $ref: "#/components/examples/PokemonExample01",
                },
                PokemonExample02: {
                  $ref: "#/components/examples/PokemonExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Pokemon model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Pokemon",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
    },
    "/Pokemon/{id}": {
      get: {
        tags: ["PokemonController"],
        summary: "Retrieve Pokemon",
        operationId: "retrievePokemonbyID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Pokemon id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Pokemon id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Pokemon",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
      put: {
        tags: ["PokemonController"],
        summary: "Update Pokemon",
        operationId: "updatePokemon",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Pokemon id 1",
                value: 1,
              },
              two: {
                summary: "Update Pokemon id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pokemon",
              },
              examples: {
                PokemonUpdate: {
                  $ref: "#/components/examples/PokemonInsert",
                },
                PokemonExample01: {
                  $ref: "#/components/examples/PokemonExample01",
                },
                PokemonExample02: {
                  $ref: "#/components/examples/PokemonExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Pokemon PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
      delete: {
        tags: ["PokemonController"],
        summary: "Delete Pokemon",
        operationId: "deletePokemon",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Pokemon id 1",
                value: 1,
              },
              two: {
                summary: "Delete Pokemon id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "PokemonController",
      },
    },
    "/Trainer/Count": {
      get: {
        tags: ["TrainerController"],
        summary: "Count Trainer",
        operationId: "countTrainer",
        responses: {
          200: {
            description: "Number of Trainer model instances",
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
    },
    "/Trainer": {
      get: {
        tags: ["TrainerController"],
        summary: "Retrieve Trainer",
        operationId: "retrieveTrainer",
        responses: {
          200: {
            description: "Array of Trainer model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Trainer",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Trainer_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
      post: {
        tags: ["TrainerController"],
        summary: "Create Trainer",
        operationId: "createTrainer",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Trainer",
              },
              examples: {
                TrainerInsert: {
                  $ref: "#/components/examples/TrainerInsert",
                },
                TrainerExample01: {
                  $ref: "#/components/examples/TrainerExample01",
                },
                TrainerExample02: {
                  $ref: "#/components/examples/TrainerExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Trainer",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Trainer model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Trainer",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Trainer",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
    },
    "/Trainer/{id}": {
      get: {
        tags: ["TrainerController"],
        summary: "Retrieve Trainer",
        operationId: "retrieveTrainer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Trainer id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Trainer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Trainer",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Trainer",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
      put: {
        tags: ["TrainerController"],
        summary: "Update Trainer",
        operationId: "updateTrainer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Trainer id 1",
                value: 1,
              },
              two: {
                summary: "Update Trainer id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Trainer",
              },
              examples: {
                TrainerUpdate: {
                  $ref: "#/components/examples/TrainerInsert",
                },
                TrainerExample01: {
                  $ref: "#/components/examples/TrainerExample01",
                },
                TrainerExample02: {
                  $ref: "#/components/examples/TrainerExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Trainer PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
      delete: {
        tags: ["TrainerController"],
        summary: "Delete Trainer",
        operationId: "deleteTrainer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Trainer id 1",
                value: 1,
              },
              two: {
                summary: "Delete Trainer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TrainerController",
      },
    },
    "/Tipo/Count": {
      get: {
        tags: ["TipoController"],
        summary: "Count Tipo",
        operationId: "countTipo",
        responses: {
          200: {
            description: "Number of Tipo model instances",
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
    },
    "/Tipo": {
      get: {
        tags: ["TipoController"],
        summary: "Retrieve Tipo",
        operationId: "retrieveTipo",
        responses: {
          200: {
            description: "Array of Tipo model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Tipo",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
      post: {
        tags: ["TipoController"],
        summary: "Create Tipo",
        operationId: "createTipo",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tipo",
              },
              examples: {
                TipoInsert: {
                  $ref: "#/components/examples/TipoInsert",
                },
                TipoExample01: {
                  $ref: "#/components/examples/TipoExample01",
                },
                TipoExample02: {
                  $ref: "#/components/examples/TipoExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Tipo",
              },
              examples: {
                TipoInsert: {
                  $ref: "#/components/examples/TipoInsert",
                },
                TipoExample01: {
                  $ref: "#/components/examples/TipoExample01",
                },
                TipoExample02: {
                  $ref: "#/components/examples/TipoExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Tipo model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tipo",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Tipo",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
    },
    "/Tipo/{id}": {
      get: {
        tags: ["TipoController"],
        summary: "Retrieve Tipo",
        operationId: "retrieveTipo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Tipo id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Tipo id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tipo",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Tipo",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
      put: {
        tags: ["TipoController"],
        summary: "Update Tipo",
        operationId: "updateTipo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Tipo id 1",
                value: 1,
              },
              two: {
                summary: "Update Tipo id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tipo",
              },
              examples: {
                TipoUpdate: {
                  $ref: "#/components/examples/TipoInsert",
                },
                TipoExample01: {
                  $ref: "#/components/examples/TipoExample01",
                },
                TipoExample02: {
                  $ref: "#/components/examples/TipoExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Tipo PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
      delete: {
        tags: ["TipoController"],
        summary: "Delete Tipo",
        operationId: "deleteTipo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Tipo id 1",
                value: 1,
              },
              two: {
                summary: "Delete Tipo id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TipoController",
      },
    },
    "/Battles/Count": {
      get: {
        tags: ["BattlesController"],
        summary: "Count Battles",
        operationId: "countBattles",
        responses: {
          200: {
            description: "Number of Battles model instances",
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
    },
    "/Battles": {
      get: {
        tags: ["BattlesController"],
        summary: "Retrieve Battles",
        operationId: "retrieveBattles",
        responses: {
          200: {
            description: "Array of Battles model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Battles",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
      post: {
        tags: ["BattlesController"],
        summary: "Create Battles",
        operationId: "createBattles",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Battles",
              },
              examples: {
                BattlesInsert: {
                  $ref: "#/components/examples/BattlesInsert",
                },
                BattlesExample01: {
                  $ref: "#/components/examples/BattlesExample01",
                },
                BattlesExample02: {
                  $ref: "#/components/examples/BattlesExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Battles",
              },
              examples: {
                BattlesInsert: {
                  $ref: "#/components/examples/BattlesInsert",
                },
                BattlesExample01: {
                  $ref: "#/components/examples/BattlesExample01",
                },
                BattlesExample02: {
                  $ref: "#/components/examples/BattlesExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Battles model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Battles",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Battles",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
    },
    "/Battles/{id}": {
      get: {
        tags: ["BattlesController"],
        summary: "Retrieve Battles",
        operationId: "retrieveBattles",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Battles id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Battles id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Battles",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Battles",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
      put: {
        tags: ["BattlesController"],
        summary: "Update Battles",
        operationId: "updateBattles",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Battles id 1",
                value: 1,
              },
              two: {
                summary: "Update Battles id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Battles",
              },
              examples: {
                BattlesUpdate: {
                  $ref: "#/components/examples/BattlesInsert",
                },
                BattlesExample01: {
                  $ref: "#/components/examples/BattlesExample01",
                },
                BattlesExample02: {
                  $ref: "#/components/examples/BattlesExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Battles PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
      delete: {
        tags: ["BattlesController"],
        summary: "Delete Battles",
        operationId: "deleteBattles",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Battles id 1",
                value: 1,
              },
              two: {
                summary: "Delete Battles id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "BattlesController",
      },
    },

    "/Teams/Count": {
      get: {
        tags: ["TeamsController"],
        summary: "Teams Count",
        operationId: "countTeams",
        responses: {
          200: {
            description: "Number of Teams model instances",
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
    },
    "/Teams": {
      get: {
        tags: ["TeamsController"],
        summary: "Retrieve Teams",
        operationId: "retrieveTeams",
        responses: {
          200: {
            description: "Array of Teams model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Teams",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Teams_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
      post: {
        tags: ["TeamsController"],
        summary: "Create Teams",
        operationId: "createTeams",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Teams",
              },
              examples: {
                TeamsInsert: {
                  $ref: "#/components/examples/TeamsInsert",
                },
                TeamsExample01: {
                  $ref: "#/components/examples/TeamsExample01",
                },
                TeamsExample02: {
                  $ref: "#/components/examples/TeamsExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Teams",
              },
              examples: {
                TeamsExample01: {
                  $ref: "#/components/examples/TeamsExample01",
                },
                TeamsExample02: {
                  $ref: "#/components/examples/TeamsExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Teams model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Teams",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Teams",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
    },
    "/Teams/{id}": {
      get: {
        tags: ["TeamsController"],
        summary: "Retrieve Teams",
        operationId: "retrieveTeamsbyID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Teams id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Teams id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Teams",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Teams",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
      put: {
        tags: ["TeamsController"],
        summary: "Update Teams",
        operationId: "updateTeams",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Teams id 1",
                value: 1,
              },
              two: {
                summary: "Update Teams id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Teams",
              },
              examples: {
                PokemonUpdate: {
                  $ref: "#/components/examples/TeamsInsert",
                },
                TeamsExample01: {
                  $ref: "#/components/examples/TeamsExample01",
                },
                TeamsExample02: {
                  $ref: "#/components/examples/TeamsExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Teams PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
      delete: {
        tags: ["TeamsController"],
        summary: "Delete Teams",
        operationId: "deleteTeams",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Teams id 1",
                value: 1,
              },
              two: {
                summary: "Delete Teams id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TeamsController",
      },
    },

    "/Teams/{id}/Trainer": {
      get: {
        tags: ["TrainerByTeamsController"],
        summary: "Retrieve Trainer based on Teams ID",
        operationId: "retrieveTrainerOnTeams",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Trainer id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Trainer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Trainer model instances by teams",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Trainer",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Pokemon_response",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TrainerByTeamsController",
      },
    },
  },
  components: {
    schemas: {
      Trainer: {
        title: "Trainer",
        required: ["nome"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
        },
        additionalProperties: true,
        example: {
          id: 0,
          nome: "name",
        },
      },
      Pokemon: {
        title: "Pokemon",
        required: ["nome", "tipo1"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nome: {
            type: "string",
          },
          tipo1: {
            type: "integer",
            format: "int64",
          },
          tipo2: {
            type: "integer",
            format: "int64",
            nullable: true,
          },
        },
        additionalProperties: false,
        example: {
          id: 1,
          nome: "Pikachu",
          tipo1: 1,
          tipo2: 4,
        },
      },
      Tipo: {
        title: "Tipo",
        required: ["name"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nome: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          nome: "Virus",
        },
      },
      Battles: {
        title: "Battles",
        required: [
          "id_trainer1",
          "id_trainer2",
          "id_digimon1",
          "id_digimon2",
          "winner",
          "data",
        ],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          id_trainer1: {
            type: "integer",
            format: "int64",
          },
          id_trainer2: {
            type: "integer",
            format: "int64",
          },
          id_digimon1: {
            type: "integer",
            format: "int64",
          },
          id_digimon2: {
            type: "integer",
            format: "int64",
          },
          winner: {
            type: "integer",
            format: "int64",
          },
          data: {
            type: "date",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          id_trainer1: 1,
          id_trainer2: 2,
          id_digimon1: 1,
          id_digimon2: 2,
          winner: 1,
          data: "2024-05-05 18:00:00",
        },
      },
      Pokemon_response: {
        type: "object",
        properties: {
          Pokemon: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Pokemon",
            },
          },
        },
        xml: {
          name: "Pokemon",
        },
      },
      Trainer_response: {
        type: "object",
        properties: {
          Trainer: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Trainer",
            },
          },
        },
        xml: {
          name: "Trainer",
        },
      },
    },
    examples: {
      TrainerExample01: {
        value: {
          id: 1,
          name: "Trainer 01",
        },
      },
      TrainerExample02: {
        value: {
          id: 2,
          name: "Trainer 02",
        },
      },
      TrainerInsert: {
        value: {
          id: 1,
          name: "Trainer",
        },
      },
      PokemonExample01: {
        value: {
          id: 1,
          nome: "Pikachu",
          tipo1: "Electric",
          tipo2: null,
        },
      },
      PokemonExample02: {
        value: {
          id: 2,
          nome: "Charmander",
          tipo1: "Fire",
          tipo2: null,
        },
      },
      PokemonInsert: {
        value: {
          id: 1,
          nome: "Bulbasaur",
          tipo1: "Grass",
          tipo2: null,
        },
      },
      BattlesExample01: {
        value: {
          id: 1,
          id_trainer1: 1,
          id_trainer2: 2,
          id_digimon1: 1,
          id_digimon2: 2,
          winner: 1,
          data: "2024-05-05 18:00:00",
        },
      },
      BattlesExample02: {
        value: {
          id: 2,
          id_trainer1: 1,
          id_trainer2: 2,
          id_digimon1: 1,
          id_digimon2: 2,
          winner: 1,
          data: "2024-05-05 18:00:00",
        },
      },
      BattlesInsert: {
        value: {
          id: 1,
          id_trainer1: 1,
          id_trainer2: 2,
          id_digimon1: 1,
          id_digimon2: 2,
          winner: 1,
          data: "2024-05-05 18:00:00",
        },
      },
      TipoExample01: {
        value: {
          id: 1,
          nome: "Fire",
        },
      },
      TipoExample02: {
        value: {
          id: 2,
          nome: "Grass",
        },
      },
      TipoInsert: {
        value: {
          id: 1,
          nome: "Electric",
        },
      },
      TeamsExample01: {
        value: {
          id: 1,
          nome: "Teams 01",
        },
      },
      TeamsExample02: {
        value: {
          id: 2,
          nome: "Teams 02",
        },
      },
      TeamsInsert: {
        value: {
          id: 1,
          nome: "Teams",
        },
      },
      Battles_response: {
        type: "object",
        properties: {
          Battles: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Battles",
            },
          },
        },
        xml: {
          name: "Battles",
        },
      },
      Tipo_response: {
        type: "object",
        properties: {
          Tipo: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Tipo",
            },
          },
        },
        xml: {
          name: "Tipo",
        },
        name: "Tipo",
      },
    },
    Teams_response: {
      type: "object",
      properties: {
        Teams: {
          type: "array",
          items: {
            $ref: "#/components/schemas/Teams",
          },
        },
      },
      xml: {
        name: "Teams",
      },
    },
    securitySchemes: {
      OAuth2Security: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: [],
          },
        },
      },
    },
  },


  security: [{ OAuth2Security: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
