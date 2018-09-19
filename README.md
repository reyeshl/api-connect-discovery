#  api-connect-discovery
Data source discovery and model generation as a workaound for IBM API Connect designer issues.
IBM APIC designer is a web based tool to create data sources, models, api definitions and also to policies for the micro gateway(open source) or data power.
The discovery part is not very stable and it does not allow to specify service name and schema for oracle which is required in you are in an enterprise setting.

# The data source
file discovery-and-build-tables-Oracle.js  is showing a data source that happened to be Oracle in this example , howerver these functions are agnostics to the type of data source since they are implementing  the data juggler prototype.

Discovery-and-build-tables-mYSQL.js is pointing to a data source connected to MYSQL. 


# schema-less models
discovery-and-build-tables-Oracle.js  and Discovery-and-build-tables-mYSQL.js generate  schema-less models , that means that you can publish the API without creating the corresponding JSON models.   
IBM API Connect may not like schema-less models, but they are very dynamic.  

# Generating models from Views.
Generating models from views just add the property   {"views":true} to the options in the call back function. 


# Model generation from RAW SQL in Oracle
oracle loopback connector is based on  ORACLEDB  nodejs library. 
Adding a model from plain sql is very simpel as    modifying the modelname.js file as adding mixins.
updating this libray with one example later. 

#  generating and writing the models without running the app.
file modelGen.js  can be use to generate the models JSON files , you can generate the files in two differnt ways.
1) place the script under [yourproject]/server/boot/ and run  " node . " 
2) place your file(s) under [yourproject]/server/bin/  and   run from the project folder  "  node server/bin/yourfile.js 

h

