const express = require('express');
const router = express.Router();

const {
  getCollectionByContractAddr,
} = require(`../../prismaScripts/collection`);

router.get('/collectioninfo', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress === undefined ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });

  const collectioninfo = await getCollectionByContractAddr(
    body.contractAddress
  );
});

module.exports = router;
