# Backend Example
MongoDB, which can perform project CRUD operations, is an example of a backend built using ExpressJs. Other features of the project:
1. The entered user entries are checked and the name, mail and password sections cannot be blank.
2. It is not possible to write anything other than e-mail to the mail part with the control in the mail section.
3. Errors that may arise are simplified and clearly presented to the user.
4. The project uses the MongoDB Atlas database.




# Install and Running

To connect to the database, MongoDb atlas cluster address must be entered in the mongoose.connect statement created in the connectDatabase file and the user information created in the cluster must be added to the address.
The ```npm run dev``` command is sufficient for the project to run.


# Crud

In the pastman interface for crud operations:
1. To update the user id entered: localhost: 5000/api/users/edit/61587b5af7fbc7996418ccea
2. To delete the user whose id is entered: localhost:5000/api/users/delete/6158792aec600c43d600d453
3. To display the user whose id is entered: localhost:5000/api/users/6158792aec600c43d600d453
4. To add new users: localhost:5000/api/auth/register

