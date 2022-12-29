const prisma = require(`../prisma/prisma`);

const getItemsByOwnerAddress = async (walletAddress) => {
  try {
    const items = await prisma.items.findMany({
      where: { ownerAddress: walletAddress },
    });
    return items;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getItemsByCollectionAddress = async (contractAddress) => {
  try {
    const items = await prisma.items.findMany({
      where: { collectionAddress: contractAddress },
    });
    return items;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getItemByCollAddrAndTokenId = async (collectionAddress, tokenId) => {
  try {
    const item = await prisma.items.findFirst({
      where: {
        collectionAddress,
        tokenId,
      },
    });
    return item;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getItemsByCollectionName = async (collectionName) => {
  try {
    const collectionData = await prisma.collection.findFirst({
      where: { collectionName },
    });
    const items = await prisma.items.findMany({
      where: { collectionAddress: collectionData.contractAddress },
    });
    return items;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  getItemsByCollectionAddress,
  getItemsByOwnerAddress,
  getItemByCollAddrAndTokenId,
  getItemsByCollectionName,
};
