const pg = require('pg')
const postgresUrl = 'postgres://localhost/testytesterson' // specify the DB name
const cow = new pg.Client(postgresUrl) /// This needs the place to get the info i. e address

cow.connect()



module.exports = cow


