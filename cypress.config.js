const { defineConfig } = require('cypress')

 module.exports = defineConfig({
   e2e: {
     baseUrl: 'http://localhost:8080'
   },
   requestTimeout: 5000,
   video: false,
   viewportHeight: 1515,
   viewportWidth: 1000,
 })