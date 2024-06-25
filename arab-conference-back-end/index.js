const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const dbURL = process.env.DB_URL;

mongoose.set('strictQuery', true);

console.log('dbURL', dbURL);

(async () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database', error);
        process.exit(1);
    }

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})();
