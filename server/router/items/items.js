const express = require('express');
const router = express.Router();

const {
  getItemsByCollectionAddress,
  getItemsByOwnerAddress,
  getItemByCollAddrAndTokenId,
} = require('../../prismaScripts/items');

router.get('/getbycollectionaddr', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress == 'undefined' ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const items = await getItemsByCollectionAddress(body.contractAddress);
  if (items.length !== 0)
    return res.status(200).send({ status: 'Success', content: items });
  if (items.length === 0)
    return res.status(200).send({ status: 'Success', content: 'No item' });
  else return res.status(418).send({ status: 'Failed', content: 'Failed' });
});

router.get('/getbyowneraddr', async (req, res) => {
  const body = req.body;
  if (
    typeof body.walletAddress == 'undefined' ||
    Object.keys(body).length !== 1
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const items = await getItemsByOwnerAddress(body.walletAddress);
  if (items.length !== 0)
    return res.status(200).send({ status: 'Success', content: items });
  else if (items.length === 0)
    return res.status(200).send({ status: 'Success', content: 'No items' });
  else return res.status(418).send({ status: 'Failed', content: 'Failed' });
});

router.get('/getmetadata', async (req, res) => {
  const body = req.body;
  if (
    typeof body.contractAddress === 'undefined' ||
    typeof body.tokenId === 'undefined' ||
    Object.keys(body).length !== 2
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });

  const getMetadataRes = await getItemByCollAddrAndTokenId(
    body.contractAddress,
    body.tokenId
  );
  if (getMetadataRes.length !== 0)
    return res
      .status(200)
      .send({ status: 'Success', content: getMetadataRes.metaData });
  else
    return res
      .status(418)
      .send({ status: 'Failed', content: 'Item does not exist' });
});

module.exports = router;
