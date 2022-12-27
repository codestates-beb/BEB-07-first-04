const express = require('express');
const router = express.Router();

const {
  getUser,
  updateBGPic,
  updateProfilePic,
  updateUsername,
} = require(`../../prismaScripts/user`);

router.post('/get', async (req, res) => {
  const body = req.body;
  const getUserRes = await getUser(body.walletAddress);
  res.status(200).send(getUserRes);
});

router.post('/updateusername', async (req, res) => {
  const body = req.body;
  if (typeof body.walletAddress === undefined)
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const updateRes = await updateUsername(body.walletAddress, body.username);
  if (updateRes)
    res.status(200).send({ status: 'Success', content: 'Username Changed' });
  else res.status(418).send({ status: 'Failed', content: 'Failed' });
});

router.post('/updateprofpic', async (req, res) => {
  const body = req.body;
  if (
    typeof body.walletAddress === undefined ||
    typeof body.profilePicUrl === undefined ||
    Object.keys(body).length !== 2
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const updateRes = await updateProfilePic(
    body.walletAddress,
    body.profilePicUrl
  );
  if (updateRes)
    res
      .status(200)
      .send({ status: 'Success', content: 'Profile Picture changed' });
  else
    res
      .status(418)
      .send({ status: 'Failed', content: 'Profile Picture Change Failed' });
});

router.post('/updatebgpic', async (req, res) => {
  const body = req.body;
  if (
    typeof body.walletAddress === undefined ||
    typeof body.backgroundPicUrl === undefined ||
    Object.keys(body).length !== 2
  )
    return res.status(400).send({ status: 'Failed', content: 'Bad Request' });
  const updateRes = await updateBGPic(
    body.walletAddress,
    body.backgroundPicUrl
  );
  if (updateRes) res.status(200).send(updateRes);
  else res.status(418).send({ status: 'Failed', content: 'Failed' });
});

module.exports = router;
