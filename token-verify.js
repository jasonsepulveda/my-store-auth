const  jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NjM1NjI4Mn0.zycBnWHThwPxEz2OsgZ4VyPsgkCIiAxgCSr-oTfW3D8'
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);
console.log(payload);
