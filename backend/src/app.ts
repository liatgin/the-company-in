import server from './server';

const port = parseInt(process.env.PORT || '3000');

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;





// import express from 'express';

// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('The sedulous hyena ate the antelope!');
// });
// app.listen(port, () => {
//   return console.log(`server is listening on ${port}`);
// });


