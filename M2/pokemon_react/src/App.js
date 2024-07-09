import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "http://localhost:3000"; // URL do backend

export default function App() {

  // Estados para as tabelas
  const [Tipo, setTipo] = useState([]);
  const [Pokemon, setPokemon] = useState([]);
  const [Trainer, setTrainer] = useState([]);
  const [Team, setTeam] = useState([]);
  const [Battles, setBattles] = useState([]);

  // Estados para novos registros
  const [newTipo, setNewTipo] = useState({ id: "", nome: "" });
  const [newPokemon, setNewPokemon] = useState({ id: "", nome: "", tipo1: "", tipo2: "" });
  const [newTrainer, setNewTrainer] = useState({ id: "", nome: "" 	});
  const [newTeam, setNewTeam] = useState({ id: "", nome: "", id_trainer: "" });
  const [newBattles, setNewBattles] = useState({ id: "", team1: "", team2: "", winner: "", date: "" });

  const [newPutTipo, setNewPutTipo] = useState({ id: "", nome: "" });
  const [newPutPokemon, setNewPutPokemon] = useState({ id: "", nome: "", tipo1: "", tipo2: "" });
  const [newPutTrainer, setNewPutTrainer] = useState({ id: "", nome: "" 	});
  const [newPutTeam, setNewPutTeam] = useState({ id: "", nome: "", id_trainer: "" });
  const [newPutBattles, setNewPutBattles] = useState({ id: "", team1: "", team2: "", winner: "", date: "" });
  const [githubUsername, setGithubUsername] = useState("");



  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:3000/auth/github";
  
    axios.get(`${baseURL}/user`).then(response => {
      const username = response.data.username;
      setGithubUsername(username);
      // Redirect to localhost:3000 after successful login
      window.location.href = "http://localhost:3006";
    }).catch(error => {
      console.error("Failed to fetch GitHub username", error);
    });
  };









  // Funçes CRUD para Tipo
  const fetchTipo = () => {
    axios.get(`${baseURL}/Tipo`).then(response => {
      setTipo(response.data);
    });
  };

  const createTipo = () => { 
    const { id, nome } = newTipo;   
    if (!id || !nome) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Tipo`, newTipo).then(() => {
      fetchTipo();
      setNewTipo({ id: "", nome: "" });

    });
  };

  const updateTipo = () => {
    const { id, nome } = newPutTipo;
    if (!id || !nome) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Tipo/${id}`, { id ,nome })
      .then(() => {
        fetchTipo();
        setNewPutTipo({ id: "", nome: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Tipo!", error);
      });
  };

  const deleteTipo = (id) => {
    axios.delete(`${baseURL}/Tipo/${id}`).then(() => {
      fetchTipo();
    });
  };

  // Funções CRUD para Pokemon
  const fetchPokemon = () => {
    axios.get(`${baseURL}/Pokemon`).then(response => {
      setPokemon(response.data);
    });
  };

  const createPokemon = () => {
    const { id, nome, tipo1 } = newPokemon;   
    if (!id || !nome || !tipo1 ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Pokemon`, newPokemon).then(() => {
      fetchPokemon();
      setNewPokemon({ id: "", nome: "", tipo1: "", tipo2: "" });
    });
  };


  const updatePokemon = () => {
    const { id, nome, tipo1, tipo2 } = newPutPokemon;
    if (!id || !nome || !tipo1 ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Pokemon/${id}`, { nome, tipo1, tipo2 })
      .then(() => {
        fetchPokemon();
        setNewPutPokemon({id: "", nome: "", tipo1: "", tipo2: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar Pokemon!", error);
      });
  };

  const deletePokemon = (id) => {
    axios.delete(`${baseURL}/Pokemon/${id}`).then(() => {
      fetchPokemon();
    });
  };

  // Funções CRUD para Trainer
  const fetchTrainer = () => {
    axios.get(`${baseURL}/Trainer`).then(response => {
      setTrainer(response.data);
    });
  };

  const createTrainer = () => {
    const { id, nome } = newTrainer;   
    if (!id || !nome) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Trainer`, newTrainer).then(() => {
      fetchTrainer();
      setNewTrainer({ id: "", nome: "" });
    });
  };

  const updateTrainer = () => {
    const { id, nome } = newPutTrainer;
    if (!id || !nome) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Trainer/${id}`, { nome })
      .then(() => {
        fetchTrainer();
        setNewPutTrainer({ id: "", nome: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Trainer!", error);
      });
  };

  const deleteTrainer = (id) => {
    axios.delete(`${baseURL}/Trainer/${id}`).then(() => {
      fetchTrainer();
    });
  };

  // Funções CRUD para Team
  const fetchTeam = () => {
    axios.get(`${baseURL}/Teams`).then(response => {
      setTeam(response.data);
    });
  };

  const createTeam = () => {
    const { id, nome, id_trainer } = newTeam;   
    if (!id || !nome || !id_trainer) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Teams`, newTeam).then(() => {
      fetchTeam();
      setNewTeam({ id: "", nome: "", id_trainer: "" });
    });
  };

  const updateTeam = () => {
    const { id, nome, id_trainer } = newPutTeam;
    if (!id || !nome || !id_trainer) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Teams/${id}`, { nome, id_trainer })
      .then(() => {
        fetchTeam();
        setNewPutTeam({ id: "", nome: "", id_trainer: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar a Team!", error);
      });
  };

  const deleteTeam = (id) => {
    axios.delete(`${baseURL}/Teams/${id}`).then(() => {
      fetchTeam();
    });
  };



 // Funções CRUD para Battles
 const fetchBattles = () => {
  axios.get(`${baseURL}/Battles`).then(response => {
    setBattles(response.data);
  });
};

const createBattles = () => {
  const { id, team1, team2, winner, date } = newBattles;   
  if (!id || !team1 || !team2 || !winner || !date) {
    alert("Todos os campos são obrigatórios.");
    return;
  }
  axios.post(`${baseURL}/Battles`, newBattles).then(() => {
      fetchBattles();
      setNewBattles({ id: "", team1: "", team2: "", winner: "", date: "" });
  });
};
const updateBattles = () => {
  const { id, team1, team2, winner, date } = newPutBattles;
  if (!id || !team1 || !team2 || !winner || !date) {
    alert("All fields are required.");
    return;
  }

  axios.put(`${baseURL}/Battles/${id}`, { team1, team2, winner, date })
    .then(() => {
      fetchBattles();
      setNewPutBattles({ id: "", team1: "", team2: "", winner: "", date: "" });
    })
    .catch(error => {
      console.error("An error occurred while updating the Battle!", error);
    });
};

const deleteBattles = (id) => {
  axios.delete(`${baseURL}/Battles/${id}`).then(() => {
    fetchBattles();
  });
};






  useEffect(() => {
    fetchTipo();
    fetchPokemon();
    fetchTrainer();
    fetchTeam();
    fetchBattles();

  }, []);

  return (
    <div>
      <div>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
      {githubUsername && <p>GitHub Username: {githubUsername}</p>}
      </div>
      <h2>Tipo</h2>
      <table>
        <thead>
          <tr>
            <th>TipoID</th>
            <th>TipoName</th>
          </tr>
        </thead>
        <tbody>
          {Tipo.map(Tipo => (
            <tr key={Tipo.id}>
              <td>{Tipo.id}</td>
              <td>{Tipo.nome}</td>
              <td>
                <button onClick={() => deleteTipo(Tipo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Tipo</h3>
      <input
        placeholder="TipoID"
        value={newTipo.id}
        onChange={e => setNewTipo({ ...newTipo, id: e.target.value })}
      />
      <input
        placeholder="TipoNome"
        value={newTipo.nome}
        onChange={e => setNewTipo({ ...newTipo, nome: e.target.value })}
      />
      <button onClick={createTipo}>Create Tipo</button>

      <h3>Update Tipo</h3>
      <input
        placeholder="TipoID"
        value={newPutTipo.id}
        onChange={e => setNewPutTipo({ ...newPutTipo, id: e.target.value })}
      />
      <input
        placeholder="TipoNome"
        value={newPutTipo.nome}
        onChange={e => setNewPutTipo({ ...newPutTipo, nome: e.target.value })}
      />
      <button onClick={updateTipo}>Update Tipo</button>

     
      <h2>Pokemon</h2>
      <table>
        <thead>
          <tr>
            <th>PokemonID</th>
            <th>PokemonName</th>
            <th>TipoID1</th>
            <th>TipoID2</th>
          </tr>
        </thead>
        <tbody>
          {Pokemon.map(Pokemon => (
            <tr key={Pokemon.id}>
              <td>{Pokemon.id}</td>
              <td>{Pokemon.nome}</td>
              <td>{Pokemon.tipo1}</td>
              <td>{Pokemon.tipo2}</td>
              <td>
                <button onClick={() => deletePokemon(Pokemon.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Pokemon</h3>
      <input
        placeholder="PokemonID"
        value={newPokemon.id}
        onChange={e => setNewPokemon({ ...newPokemon, id: e.target.value })}
      />
      <input
        placeholder="PokemonName"
        value={newPokemon.nome}
        onChange={e => setNewPokemon({ ...newPokemon, nome: e.target.value })}
      />
      <input
        placeholder="TipoID1"
        value={newPokemon.tipo1}
        onChange={e => setNewPokemon({ ...newPokemon, tipo1: e.target.value })}
      />
      <input
        placeholder="TipoID2"
        value={newPokemon.tipo2}
        onChange={e => setNewPokemon({ ...newPokemon, tipo2: e.target.value })}
      />
      <button onClick={createPokemon}>Create Pokemon</button>

      <h3>Update Pokemon</h3>
      <input
        placeholder="PokemonID"
        value={newPutPokemon.id}
        onChange={e => setNewPutPokemon({ ...newPutPokemon, id: e.target.value })}
      />
      <input
        placeholder="PokemonName"
        value={newPutPokemon.nome}
        onChange={e => setNewPutPokemon({ ...newPutPokemon, nome: e.target.value })}
      />
      <input
        placeholder="TipoID1"
        value={newPutPokemon.tipo1}
        onChange={e => setNewPutPokemon({ ...newPutPokemon, tipo1: e.target.value })}
      />
      <input
        placeholder="TipoID2"
        value={newPutPokemon.tipo2}
        onChange={e => setNewPutPokemon({ ...newPutPokemon, tipo2: e.target.value })}
      />
      <button onClick={updatePokemon}>Update Pokemon</button>

      
      <h2>Trainer</h2>
      <table>
        <thead>
          <tr>
            <th>TrainerID</th>
            <th>TrainerName</th>
          </tr>
        </thead>
        <tbody>
          {Trainer.map(Trainer => (
            <tr key={Trainer.id}>
              <td>{Trainer.id}</td>
              <td>{Trainer.nome}</td>
              <td>
                <button onClick={() => deleteTrainer(Trainer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Trainer</h3>
      <input
        placeholder="TrainerID"
        value={newTrainer.id}
        onChange={e => setNewTrainer({ ...newTrainer, id: e.target.value })}
      />
      <input
        placeholder="TrainerName"
        value={newTrainer.nome}
        onChange={e => setNewTrainer({ ...newTrainer, nome: e.target.value })}
      />
      <button onClick={createTrainer}>Create Trainer</button>

      <h3>Update Trainer</h3>
      <input
        placeholder="TrainerID"
        value={newPutTrainer.id}
        onChange={e => setNewPutTrainer({ ...newPutTrainer, id: e.target.value })}
      />
      <input
        placeholder="TrainerName"
        value={newPutTrainer.nome}
        onChange={e => setNewPutTrainer({ ...newPutTrainer, nome: e.target.value })}
      />
      <button onClick={updateTrainer}>Update Trainer</button>

      
      <h2>Team</h2>
      <table>
        <thead>
          <tr>
            <th>TeamID</th>
            <th>TeamNome</th>
            <th>IDTrainer</th>
          </tr>
        </thead>
        <tbody>
          {Team.map(Team => (
            <tr key={Team.id}>
              <td>{Team.id}</td>
              <td>{Team.nome}</td>
              <td>{Team.id_trainer}</td>
              <td>
                <button onClick={() => deleteTeam(Team.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Team</h3>
      <input
        placeholder="TeamID"
        value={newTeam.id}
        onChange={e => setNewTeam({ ...newTeam, id: e.target.value })}
      />
      <input
        placeholder="TeamNome"
        value={newTeam.nome}
        onChange={e => setNewTeam({ ...newTeam, nome: e.target.value })}
      />
      <input
        placeholder="IDTrainer"
        value={newTeam.id_trainer}
        onChange={e => setNewTeam({ ...newTeam, id_trainer: e.target.value })}
      />
      <button onClick={createTeam}>Create Team</button>

      <h3>Update Team</h3>
      <input
        placeholder="TeamID"
        value={newPutTeam.id}
        onChange={e => setNewPutTeam({ ...newPutTeam, id: e.target.value })}
      />
      <input
        placeholder="TeamNome"
        value={newPutTeam.nome}
        onChange={e => setNewPutTeam({ ...newPutTeam, nome: e.target.value })}
      />
      <input
        placeholder="IDTrainer"
        value={newPutTeam.id_trainer}
        onChange={e => setNewPutTeam({ ...newPutTeam, id_trainer: e.target.value })}
      />
      <button onClick={updateTeam}>Update Team</button>
    
    
    <h2>Battle</h2>
    <table>
      <thead>
        <tr>
          <th>BattleID</th>
          <th>TeamID1</th>
          <th>TeamID2</th>
          <th>Result</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {Battles.map(Battles => (
          <tr key={Battles.id}>
            <td>{Battles.id}</td>
            <td>{Battles.team1}</td>
            <td>{Battles.team2}</td>
            <td>{Battles.winner}</td>
            <td>{Battles.date}</td>
            <td>
              <button onClick={() => deleteBattles(Battles.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3>Create Battle</h3>
    <input
      placeholder="BattleID"
      value={newBattles.id}
      onChange={e => setNewBattles({ ...newBattles, id: e.target.value })}
    />
    <input
      placeholder="TeamID1"
      value={newBattles.team1}
      onChange={e => setNewBattles({ ...newBattles, team1: e.target.value })}
    />
    <input
      placeholder="TeamID2"
      value={newBattles.team2}
      onChange={e => setNewBattles({ ...newBattles, team2: e.target.value })}
    />
    <input
      placeholder="Result"
      value={newBattles.winner}
      onChange={e => setNewBattles({ ...newBattles, winner: e.target.value })}
    />
     <input
      placeholder="Data"
      value={newBattles.date}
      onChange={e => setNewBattles({ ...newBattles, date: e.target.value })}
    />
    <button onClick={createBattles}>Create Battle</button>

    <h3>Update Battle</h3>
    <input
      placeholder="BattleID"
      value={newPutBattles.id}
      onChange={e => setNewPutBattles({ ...newPutBattles, id: e.target.value })}
    />
    <input
      placeholder="TeamID1"
      value={newPutBattles.team1}
      onChange={e => setNewPutBattles({ ...newPutBattles, team1: e.target.value })}
    />
    <input
      placeholder="TeamID2"
      value={newPutBattles.team2}
      onChange={e => setNewPutBattles({ ...newPutBattles, team2: e.target.value })}
    />
    <input
      placeholder="Result"
      value={newPutBattles.winner}
      onChange={e => setNewPutBattles({ ...newPutBattles, winner: e.target.value })}
    />
        <input
      placeholder="Data"
      value={newPutBattles.date}
      onChange={e => setNewPutBattles({ ...newPutBattles, date: e.target.value })}
    />
    <button onClick={updateBattles}>Update Battle</button>
  </div>
  );
}
