# ImageProcessingAPI
 This project is created according to contents and videos that's explained on Advanced Full Stack web development
# The aim of this project
created the api which use tools called image processing API  which resizes from OrSImage folder and save resized image on Thumbnail folder to user with specificaion when visiting the URL
# This project is created according the structures that given on te track
# The main function here are:
resizing image using sharp  after determine the width & height & image name with url 
then show the image on the browser after reloading the specification again.
All of that happened after check if the image is available on the OrSImage folder 
Also , If the image is resized before then it will be shown directly without repeating the resizing
otherwise messages will be appeared that missing input on console
## Start & build & test Scripts  using certain commands
npm run start-server
npm run build-server
npm run test-server 
# The availabe images on the OrSImage
encenadaportjpg - fjord.jpg - icelandwaterfall.jpg-
palmtunnel.jpg - santamonica.jpg
## To access the origial image
http://localhost:3000/OrSImage/fjord.jpg
## To access the resized image
http://localhost:3000/Thumbnail/imagename/palmtunnel.jpg/width/111/height/400
## Using supertest and jasmine for test the code
there are 3 tests on that project


## Packages that are needed to be installed
 npm init
 npm install eslint --save-dev
 npm i jasmine
 npm i jasmine-spec-reporter
 npm i --save-dev @types/jasmine
 npm i express
npm i --save-dev @types/express
npm i --save-dev nodemon
npm install -D typescript
npm install -D ts-node
npm install --save @types/node
npm install -g nodemon
npm install -g ts-node
npm i  multer 
npm install --save sharp npm install --save-dev @types/sharp
npm i supertest
