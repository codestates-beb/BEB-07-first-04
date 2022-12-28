const express = require('express');
const router = express.Router();

const {
  getCollectionByContractAddr,
} = require(`../../prismaScripts/collection`);

const { getItemsByCollectionAddress } = require(`../../prismaScripts/items`);

router.get('/info', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress === 'undefined' ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });

  const collectioninfo = await getCollectionByContractAddr(
    body.contractAddress
  );
  if (collectioninfo)
    return res.status(200).send({ status: 'Success', content: collectioninfo });
  else return res.status(418).send({ status: 'Failed', content: 'Failed' });
});

router.get('/data', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress === 'undefined' ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const { contractAddress } = body;
  const collectionInfo = await getCollectionByContractAddr(contractAddress);
  const collectionItems = await getItemsByCollectionAddress(contractAddress);
  if (collectionInfo && collectionItems) {
    return res.status(200).send({
      status: 'Success',
      content: { collectionInfo, collectionItems },
    });
  } else return res.status(418).send({ status: 'Failed', content: 'Failed' });
});

module.exports = router;
