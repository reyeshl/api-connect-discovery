'use strict';

//  IBM API Connect designer does not provide the flexibility of discovering only a set of table or a place to add schema owner.
// use this script to either generate your models on the fly and if you need to create the corresponding json def, just write to a file under /common/models and or / server/models
// loopback or express in this case expect a exported class or instance.

//  After this callback is executed, you can query your API at  http://localhost:3000/api/wpoptions
// or more specific queries like http://localhost:3000/api/wpoptions?filter[where][employeeID]=104


// if you place this file under [yourapp]/server/boot/   then it will be automatically executed when the application starts.
// if you place this file under [yurapp]/server/bin/
// then you can trigger it using  strong remoting.
//  not tested for ISOmorphic use.

// this function is data source agnostic.

module.exports = function(topAppClass, callback) {
// data source is the  name given to the data source in API connect designer, but you can also just go to datasources.jsn and get the name from there
  const dbDataSource = topAppClass.dataSources.mysqlds;

  dbDataSource.discoverAndBuildModels(
    'wp_options',    // this example shows only one table , but you can use foreach on a array or discoverShema to discover all in a schema.
    {relations: false, 'schema':'wordpress', 'views': true},
    // third parameter is the call back function
    function(err, models) {
      if (err) return callback(err);
      //following nodejs error First pattern
      for (const modelName in models) {
        topAppClass.model(models[modelName], {dataSource: dbDataSource});
      }
      callback();
    });
};
