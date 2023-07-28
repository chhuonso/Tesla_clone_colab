require('dotenv')
const mongoose = require('mongoose')
const store = require('./data/store')

const uri = process.env.MONGO_DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('Established a connection to the database');
        importProducts();
        importArrarel()
    })
    .catch(err => console.log('Something went wrong when connecting to the database', err));

const importApparel = async () => {
    try {
        // Will delete the existing records before we insert
        await Product.deleteMany();
        // Inserting Product from my products data file
        await Product.insertMany(apparel);
        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

const importArrarel = async () => {
    try {
        // Will delete the existing records before we insert
        await Apparel.deleteMany();
        // Inserting Product from my products data file
        await Apparel.insertMany(apparel);
        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};