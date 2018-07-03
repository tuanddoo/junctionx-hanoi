import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res) => {
  return res.json({});
});

apiRouter.get('/event', (req, res) => {
  return res.json({
    name: 'EventPostTitle',
    header1: 'header1',
    content1: 'content1',
    header2: 'header2',
    content2: 'content2',
    start_date: 'start_date',
    end_date: 'end_date',
    address: 'address',
    city: 'city',
    country: 'country',
    coordinates: 'coordinates',
    email: 'email',
    external: 'external',
    external_url: 'external_url'
  });
});

apiRouter.get('/tracks', (req, res) => {
  return res.json({});
});

apiRouter.get('/partners', (req, res) => {
  return res.json({});
});

apiRouter.get('/sections', (req, res) => {
  return res.json({});
});

apiRouter.get('/schedule', (req, res) => {
  return res.json({});
});

export default apiRouter;
