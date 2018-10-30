const express = require('express');
const app = express();

app.get('/api/whoami/', (req, res) => {
  responseObject = {
    ipaddress: req.ip,
    language: req.get('accept-language'),
    software: req.get('user-agent'),
  };

  res.json(responseObject);
});

app.listen(8003, () => {
  console.log('Whoami microservice listening on port 8003');
});
