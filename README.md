This application is done as per the below link:
https://www.sitepoint.com/angular-2-tutorial/

Major steps are:
Create angular project.
Create todo class.
Create TodoDataService.
Create UI/ Html 
Create appcomponent methods to get called from UI


In the second step, we separated all the components, such as:
TodoList
TodoListItem
Header
Footer

In the third step we did mainly two things:
1. Used a RestApi as data provider
2. Configured bootstrap css framework

We used a node module called json-server to create a server like component which returns json file for this example.
This can be replaced by any proper Restful api. 
After installation of this module, it serves a json service in a different URL
To access this api, we created an angular service and used http module to interect with this service.
Using http module forces us to convert all the methods using Observable as http interactions are asynchronous.

We also configured bootstrap css framework.
