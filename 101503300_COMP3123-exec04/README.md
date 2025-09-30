# 123456789_COMP3123-exec04

COMP3123 • exec04 — Express JS Exercise

## 1) Install & Run
```bash
npm install
npm run dev   # auto-restarts with nodemon
# or:
npm start     # plain node
```

Server will start at: <http://localhost:3000>

## 2) Test Endpoints (examples)
```bash
curl http://localhost:3000/hello

curl "http://localhost:3000/user?firstname=John&lastname=Doe"

curl -X POST http://localhost:3000/user/John/Doe

curl -X POST http://localhost:3000/users     -H "Content-Type: application/json"     -d '[{"firstname":"Pritesh","lastname":"Patel"},{"firstname":"John","lastname":"Doe"}]'
```

Static file:
- Open <http://localhost:3000/instruction.html>

## 3) What to Submit
- GitHub repository (named `StudentID_COMP3123-exec04`)
- ZIP upload: `StudentID_COMP3123-exec04.zip`
- Screenshots of each endpoint's response (Postman or curl) and of `/instruction.html`

## 4) Notes
- Remember to rename the folder/repo to your actual StudentID.
- `.gitignore` included to avoid committing `node_modules`.
