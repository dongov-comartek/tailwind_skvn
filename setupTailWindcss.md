Create project used TailWind css

1. npx create-react-app skvn
2. npm i -D tailwindcss postcss-cli autoprefixer
3. npx tailwind init tailwind.js --full
4. touch postcss.config.js
    1. Open posts.config.js
    2. Add: 
        1. const tailwindcss =require('tailwindcss')

			module.exports ={
   			 	plugins:[
        					tailwindcss('./tailwind.js'),
        					require('autoprefixer')
   				 ]
			}
5. Create  styles folder on src folder. Then create two file: tailwind.css and main.css
6. Go back to package.json. Then add content on  “Scripts” 
   	 "start": "npm run watch:css && react-scripts start",
   	 "build": "npm run build:css && react-scripts build",
   	 "test": "react-scripts test",
   	 "eject": "react-scripts eject",
    	"build:css":"postcss src/styles/tailwind.css -o src/styles/main.css",
   	 "watch:css":"postcss src/styles/tailwind.css -o src/styles/main.css"

7. Open file tailwind.css and add: 
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";

8. Open terminal, run:   npm start
9. Remove file app.test.js , logo.svg , reportWeb, setupTest.js, index.css on src folder
10. Open file index.js, then add  import React from 'react';
	import ReactDOM from 'react-dom';
	import './styles/main.css';
	import App from './App';


	ReactDOM.render(
  		<React.StrictMode>
    		<App />
  		</React.StrictMode>,
 	 	document.getElementById('root')
	);

11. Open file App.js, then add:


