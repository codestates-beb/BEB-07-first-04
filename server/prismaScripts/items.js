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

module.exports = {
  getItemsByCollectionAddress,
  getItemsByOwnerAddress,
};
