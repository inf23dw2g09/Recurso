// Importing necessary modules and controllers
const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const AIOController = require('../controllers/AIOController');
const AuthController = require('../controllers/AuthController');


// Routes for Pokemon
router.get('/Pokemon/Count', AIOController.countPokemon);
router.get('/Pokemon', AIOController.retrievePokemon);
router.post('/Pokemon', auth, AIOController.createPokemon);
router.get('/Pokemon/:id', AIOController.retrievePokemonbyID);
router.put('/Pokemon/:id', auth, AIOController.updatePokemon);
router.delete('/Pokemon/:id', auth, AIOController.deletePokemon);

// Routes for Trainer
router.get('/Trainer/Count', AIOController.countTrainer);
router.get('/Trainer', AIOController.retrieveTrainer);
router.post('/Trainer', auth, AIOController.createTrainer);
router.get('/Trainer/:id', AIOController.retrieveTrainerbyID);
router.put('/Trainer/:id', auth, AIOController.updateTrainer);
router.delete('/Trainer/:id', auth, AIOController.deleteTrainer);

// Routes for Battle
router.get('/Battles/Count', AIOController.countBattle);
router.get('/Battles', AIOController.retrieveBattle);
router.post('/Battles', auth, AIOController.createBattle);
router.get('/Battles/:id', AIOController.retrieveBattlebyID);
router.put('/Battles/:id', auth, AIOController.updateBattlebyID);
router.delete('/Battles/:id', auth, AIOController.deleteBattle);

// Routes for Tipo
router.get('/Tipo/Count', AIOController.countTipo);
router.get('/Tipo', AIOController.retrieveTipo);
router.post('/Tipo', auth, AIOController.createTipo);
router.get('/Tipo/:id', AIOController.retrieveTipobyID);
router.put('/Tipo/:id', auth, AIOController.updateTipobyID);
router.delete('/Tipo/:id', auth, AIOController.deleteTipo);

// Routes for TraineronTeams
router.get('/Trainer/:id', AIOController.retreiveTraineronTeams);

// Routes for Team
router.get('/Teams/Count', AIOController.countTeam);
router.get('/Teams', AIOController.retrieveTeam);
router.post('/Teams', auth, AIOController.createTeam);
router.get('/Teams/:id', AIOController.retrieveTeamByID);
router.put('/Teams/:id', auth, AIOController.updateTeamById);
router.delete('/Teams/:id', auth, AIOController.deleteTeamById);

// Routes for Authentication
router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub, (req, res) => {
    res.redirect('http://localhost:3006');
});
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);

module.exports = router;
