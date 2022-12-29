const prisma = require(`../prisma/prisma`);

const getCollectionByContractAddr = async (contractAddress) => {
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        contractAddress,
      },
    });
    if (collection) return collection;
    else {
      const logo =
        'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374960861214/defaultProfile.png';
      const backGround =
        'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374713380945/defaultBanner.png';
      return await prisma.collection.create({
        data: {
          contractAddress,
          collectionName: 'Unnamed',
          profilePicUrl: logo,
          backgroundPicUrl: backGround,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getCollectionByName = async (collectionName) => {
  try {
    const collection = await prisma.collection.findFirst({
      where: {
        collectionName,
      },
    });
    if (collection) return collection;
    else {
      const logo =
        'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374960861214/defaultProfile.png';
      const backGround =
        'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374713380945/defaultBanner.png';
      return await prisma.collection.create({
        data: {
          contractAddress,
          collectionName: 'Unnamed',
          profilePicUrl: logo,
          backgroundPicUrl: backGround,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  getCollectionByContractAddr,
  getCollectionByName,
};
