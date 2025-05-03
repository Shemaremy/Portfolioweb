# Portfolioweb
Portfolio website



## Creating a react app
--------------------

1. npm create vite
2. Select a framework (react) & project name
3. cd project_name
4. npm install
5. npm run dev   // running your react app (live server)



---------------------------------------------

## Sizes Used: vh, %, px

Icons; fontawesome.com


## Flexbox
----------

- display: flex
- flex-direction
- justify-content: ...
- align-content: ....
- gap




---------------------------------------------------


React router Dom
----------------

Install: npm i react-router-dom

import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
Router
Routes
Route



## Sources:
-----------

https://react.dev/
https://www.w3schools.com/react




## Netlify with github configuration
------------------------------------

Here's how to answer the Netlify questions related to specifying the build settings for your site:



1. Base Directory
Definition: The base directory is where Netlify installs dependencies and runs the build command. If your project is in the root directory, you can leave this blank. However, if your project files are within a subdirectory (e.g., client, app, or frontend), you should specify that path.
Example:
For a project with all files in the root: Leave it blank.
For a project with files in a subdirectory, use : "projectname" if everything is in there



2. Build Command
Definition: This is the command Netlify will run to build your site. It compiles your source code into the static files that Netlify will serve.
Examples:
- npm run build


3. Publish Directory
Definition: This is the directory where the built files are stored after running the build command. Netlify will serve files from this directory.
Examples:
- dist


4. Functions Directory
Definition: This is the directory where Netlify will look for serverless functions to deploy. These functions run as AWS Lambda functions.
- Default: netlify/functions











