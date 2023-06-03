const knex = require("knex");
const configFile = require("../knexfile");

// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || "development"; // çalışma ortamını belirledik

module.exports = knex(configFile[environment]);

// Bu kod parçası, genellikle bir veritabanı bağlantısının oluşturulduğu ve yapılandırıldığı 
// bir modül dosyasında kullanılır.Bu modül, diğer dosyalarda veritabanı işlemlerini gerçekleştirmek 
// için bu bağlantıyı kullanabilir.