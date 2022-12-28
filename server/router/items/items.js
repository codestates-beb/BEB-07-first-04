const express = require('express');
const router = express.Router();

const {
  getItemsByCollectionAddress,
  getItemsByOwnerAddress,
} = require('../../prismaScripts/items');

router.get('/getbycollectionaddr', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress === undefined ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const items = await getItemsByCollectionAddress(body.contractAddress);
  if (items) res.status(200).send({ status: 'Success', content: items });
  else res.status(418).send({ status: 'Failed', content: 'Failed' });
});

router.get('/getbyowneraddr', async (req, res) => {
  const body = req.body;
  if (typeof body.walletAddress === undefined || Object.keys(body).length !== 1)
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const items = await getItemsByOwnerAddress(body.walletAddress);
  if (items) res.status(200).send({ status: 'Success', content: items });
  else res.status(418).send({ status: 'Failed', content: 'Failed' });
});

module.exports = router;
