#todo-list

Todo list deployed on Heroku and MongoDB Atlas

error correction 1: add start: "node index.js" to the scripts of package.json

error correction 2: Use lagacy driver version of MongoDB Atlas(2.2.12) to match the node.js version, avoiding MongoWriteConcernError occurred.

Tips: Use Heroku parameter to save id/password type information. For example, save url variable in DATABASEURL could be retrieved by process.env.DATABASEURL.