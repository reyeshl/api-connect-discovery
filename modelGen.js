'use strict';
//  This function  generates  the corresponding JSON files for tables or views in a relational DB,  Oracle, Mysql and any connector implementing loopback protoypes.
// h.

module.exports = function(app, callback) {

  var localPath = require('path');
  var localFileSystem = require('fs');
  var modelStoragePath = localPath.resolve(__dirname, '../../common/models');
  var dataSource = app.dataSources.oracleds;

  function schemaDiscoveryCallBack(err, returnedSchema) {
    if (returnedSchema) {
      console.log('Discovering' + returnedSchema.name);
      var outputName = modelStoragePath + '/' + returnedSchema.name + '.json';
      // writing JSON 3 spaces for better readability
      localFileSystem.writeFile(outputName, JSON.stringify(returnedSchema, null, 3), function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('model def saved as : ' + outputName);
        }
      });
    }
    if (err) {
      console.error('Error ocurred while discovering tables/view ', err);
      return;
    }
    return callback();
  }

  // Other options can be  {relations:true}, to follow PK, FK relationships.
  let discoveryOptions = {schema: 'HR', views: true};

// testing it with a view ,
  dataSource.discoverSchema('EVIEW', discoveryOptions, schemaDiscoveryCallBack);
};
