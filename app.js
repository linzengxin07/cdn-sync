const express = require('express');
const app = express();
const port = 3000;
const assetSync = require('@appupdate/cdn-sync');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
assetSync.start('appupdate-knock-7c4a9e2f');
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
