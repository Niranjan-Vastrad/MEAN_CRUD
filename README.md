# MEAN-CRUD

Employee Directory App using Mean Architecture.


Steps to run the app.
----->Open the folder in Node CMD prompt.
----->install all the dependencies from package.json (use npm install).
----->run the app (node app.js).


connecting to database.
-----> use free hosted database from mlab.com.
-----> create account in https://mlab.com/ .
-----> create database.
-----> add Database Users to the Created database( Note: to use create, update and delete methods make the usertype Read Only? to false).
-----> update the dburi in model/db.js .
-----> Eg: var dbURI = "mongodb://<USERNAME>:<PASSWORD>@ds123456.mlab.com:23456/<Database-Name>";
-----> http://docs.mlab.com/connecting/#connect-string for more information on connecting to database.
