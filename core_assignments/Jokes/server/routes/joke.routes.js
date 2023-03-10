const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.post('/api/jokes', JokeController.createJoke)
    app.get('/api/jokes/:_id', JokeController.findJokeById)
    app.put('/api/jokes/:_id', JokeController.updateJokeById)
    app.delete('/api/jokes/:_id', JokeController.findJokeById)
}