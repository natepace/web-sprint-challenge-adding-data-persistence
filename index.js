// start your server here
const server = require('./api/server.js');

const PORT = process.env.PORT || 999;

server.listen(PORT, () => {
    console.log(`Listening to some JuiceWRLD on port ${PORT}`)
})