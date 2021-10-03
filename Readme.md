# Backend Example
MongoDB, which can perform project CRUD operations, is an example of a backend built using ExpressJs. Other features of the project:
The entered user entries are checked and the name, mail and password sections cannot be blank.
It is not possible to write anything other than e-mail to the mail part with the control in the mail section.
Errors that may arise are simplified and clearly presented to the user.
The project uses the MongoDB Atlas database.




# Install and Running

To connect to the database, MongoDb atlas cluster address must be entered in the mongoose.connect statement created in the connectDatabase file and the user information created in the cluster must be added to the address.
The npm run dev command is sufficient for the project to run.


