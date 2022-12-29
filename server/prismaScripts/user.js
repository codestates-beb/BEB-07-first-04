const prisma = require(`../prisma/prisma`);

const getUser = async (walletAddress) => {
  try {
    const getUserRes = await prisma.user.findUnique({
      where: { walletAddress },
    });
    if (!getUserRes) {
      const data = {
        walletAddress,
        username: 'unnamed',
        profilePicUrl:
          'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374960861214/defaultProfile.png',
        backgroundPicUrl:
          'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374713380945/defaultBanner.png',
      };
      await prisma.user.create({
        data,
      });
      return data;
    }
    return getUserRes;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const updateUsername = async (walletAddress, username) => {
  try {
    const updateRes = await prisma.user.update({
      where: {
        walletAddress,
      },
      data: {
        username,
      },
    });
    return updateRes;
  } catch (e) {
    console.log(e);
    return null;
  }
};
const updateProfilePic = async (walletAddress, profilePicUrl) => {
  try {
    const updateRes = await prisma.user.update({
      where: {
        walletAddress,
      },
      data: {
        profilePicUrl,
      },
    });
    return updateRes;
  } catch (e) {
    console.log(e);
    return null;
  }
};
const updateBGPic = async (walletAddress, backgroundPicUrl) => {
  try {
    const updateRes = await prisma.user.update({
      where: {
        walletAddress,
      },
      data: {
        backgroundPicUrl,
      },
    });
    return updateRes;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  getUser,
  updateUsername,
  updateBGPic,
  updateProfilePic,
};
