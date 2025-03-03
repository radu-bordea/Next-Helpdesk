# create the app
- npx create-next-app@latest next-helpdesk

# libraries
- npm install react-icons --save
- npm install json-server
# run json-server
- npx json-server --watch --port 3000 ./_data/db.json
- npx json-server --port 3000 ./_data/db.json

- npm run build