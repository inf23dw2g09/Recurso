// Controller for managing battles
var sql = require("../utils/db");



/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



// Count the number of battles
const countBattle = (req, res) => {
    sql.query("SELECT COUNT(id) FROM Battles", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve all battles
const retrieveBattle = (req, res) => {
  sql.query("SELECT * FROM Battles", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

// Create a new battle
const createBattle = (req, res) => {
  sql.query(
    "INSERT INTO Battles (Team1, Team2,  winner, date) VALUES (?,?,?,?)",
    [
      req.body.Team1,
      req.body.Team2,
      req.body.winner,
      req.body.date, 

    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

// Retrieve a battle by ID
const retrieveBattlebyID = (req, res) => {
    sql.query(
    "SELECT * FROM Battles WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

// Delete a battle by ID
const deleteBattle = (req, res) => {
    sql.query(
    "DELETE FROM Battles WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Battle " + req.params.id + " successfully deleted, You coward");
    }
  );
};

// Update a battle by ID
const updateBattlebyID = (req, res) => {
  sql.query(
    "UPDATE Battles SET Team1 = ?, Team2 = ?, winner = ?, date = ? WHERE id = ?",
    [
      req.params.id,
      req.body.Team1,
      req.body.Team2,
      req.body.winner,
      req.body.date
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Count the number of Pokémon
const countPokemon = (req, res) => {
    sql.query("SELECT COUNT(id) FROM Pokemon", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Retrieve all Pokémon
const retrievePokemon = (req, res) => {
  sql.query("SELECT * FROM Pokemon", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

// Ensure 'nome' field is not null when inserting a new Pokémon
const createPokemon = (req, res) => {
  sql.query(
    "INSERT INTO Pokemon (nome, tipo1, tipo2) VALUES (?, ?, ?)",
    [
      req.body.nome, // Change req.body.name to req.body.nome
      req.body.tipo1,
      req.body.tipo2,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

// Retrieve a Pokémon by ID
const retrievePokemonbyID = (req, res) => {
    sql.query(
    "SELECT * FROM Pokemon WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

// Delete a Pokémon by ID
const deletePokemon = (req, res) => {
    sql.query(
    "DELETE FROM Pokemon WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Pokémon " + req.params.id + " successfully deleted, you monster");
    }
  );
};

// Update a Pokémon by ID
const updatePokemon = (req, res) => {
  sql.query(
    "UPDATE Pokemon SET nome = ?, tipo1 = ?, tipo2 = ? WHERE id = ?",
    [
      req.params.id,
      req.body.nome,
      req.body.tipo1,
      req.body.tipo2

    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const countTeam = (req, res) => {
    sql.query("SELECT COUNT(id) FROM Battles", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveTeam = (req, res) => {
    sql.query("SELECT * FROM Team", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveTeamByID = (req, res) => {
    sql.query("SELECT * FROM Team WHERE id = ?", [req.params.id], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const createTeam = (req, res) => {
    sql.query("INSERT INTO Team (nome, id_trainer) VALUES (?, ?)", 
    [
        req.body.nome, 
        req.body.id_trainer
    ], function (err, result) {
        if (err) throw err;
        res.send(req.body);
    });
};

const updateTeamById = (req, res) => {
    sql.query("UPDATE Team SET nome = ?, id_trainer = ? WHERE id = ?", [req.body.nome, req.body.id_trainer, req.params.id], function (err, result) {
        if (err) throw err;
        res.send(req.body);
    });
};

const deleteTeamById = (req, res) => {
    sql.query("DELETE FROM Team WHERE id = ?", [req.params.id], function (err, result) {
        if (err) throw err;
        res.send("Team " + req.params.id + " successfully deleted");
    });
};

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const retrieveTipo = (req, res) => {
  sql.query("SELECT * FROM Tipo", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const countTipo = (req, res) => {
  sql.query("SELECT COUNT(id) FROM Tipo", 
  function (err, result) {
      if (err) throw err;
      res.send(result);
  });
};

const createTipo = (req, res) => {
  sql.query(
    "INSERT INTO Tipo (nome) VALUES (?)",
    [
      req.body.nome,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTipobyID = (req, res) => {
    sql.query(
    "SELECT * FROM Tipo WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTipo = (req, res) => {
    sql.query(
    "DELETE FROM Tipo WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Tipo " + req.params.id + " successfully deleted");
    }
  );
};

const updateTipobyID = (req, res) => {
  sql.query(
    "UPDATE Tipo SET nome = ? WHERE id = ?",
    [
      req.body.nome,
      req.params.id
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};



/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Function to count the number of trainers
const countTrainer = (req, res) => {
    // SQL query to count trainers
    sql.query("SELECT COUNT(id_trainer) FROM Trainer", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Function to retrieve all trainers
const retrieveTrainer = (req, res) => {
    // SQL query to retrieve all trainers
    sql.query("SELECT * FROM Trainer", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Function to create a new trainer
const createTrainer = (req, res) => {
    // SQL query to insert a new trainer
    sql.query(
        "INSERT INTO Trainer (id_trainer ,nome) values (?,?)",
        [req.body.nome],
        function (err, result) {
            if (err) throw err;
            res.send(req.body);
        }
    );
};

// Function to retrieve a trainer by ID
const retrieveTrainerbyID = (req, res) => {
    // SQL query to retrieve a trainer by ID
    sql.query(
        "SELECT * FROM Trainer WHERE id_trainer = ?",
        [req.params.id_trainer],
        function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    );
};

// Function to delete a trainer by ID
const deleteTrainer = (req, res) => {
    // SQL query to delete a trainer by ID
    sql.query(
        "DELETE FROM Trainer WHERE id_trainer = ?",
        [req.params.id_trainer],
        function (err, result) {
            if (err) throw err;
            res.send("Trainer " + req.params.id + " successfully deleted");
        }
    );
};

// Function to update a trainer's information
const updateTrainer = (req, res) => {
    // SQL query to update a trainer's information
    sql.query(
        "UPDATE Trainer SET nome = ? WHERE id_trainer = ?",
        [req.body.nome, req.params.id_trainer],
        function (err, result) {
            if (err) throw err;
            res.send(req.body);
        }
    );
};

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const retreiveTraineronTeams = (req, res) => {
    var sqlQuery = "SELECT * FROM Trainer WHERE Trainer.id = (SELECT id FROM Teams WHERE Teams.id = ?)";
    sql.query(sqlQuery, [req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  }
  
module.exports = {retreiveTraineronTeams,
    countTrainer, retrieveTrainer, createTrainer, retrieveTrainerbyID, updateTrainer, deleteTrainer,    
    countTipo, retrieveTipo, retrieveTipobyID, deleteTipo, updateTipobyID, createTipo,     
    countTeam, retrieveTeamByID, retrieveTeam, createTeam, updateTeamById, deleteTeamById ,    
    countPokemon, retrievePokemon, createPokemon , retrievePokemonbyID, updatePokemon, deletePokemon,    
    countBattle, retrieveBattle, retrieveBattlebyID, deleteBattle, updateBattlebyID, createBattle};