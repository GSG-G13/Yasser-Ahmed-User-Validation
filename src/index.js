const app = require('./app.js');
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is Running => http://localhost:${port}`);
});
