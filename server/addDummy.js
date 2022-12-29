const prisma = require(`./prisma/prisma`);

class user {
  constructor(walletAddress, username) {
    this.walletAddress = walletAddress;
    this.username = username;
    this.profilePicUrl =
      'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374960861214/defaultProfile.png';
    this.backgroundPicUrl =
      'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374713380945/defaultBanner.png';
  }
}

class collection {
  constructor(contractAddress, collectionName) {
    this.contractAddress = contractAddress;
    this.collectionName = collectionName;
    this.profilePicUrl =
      'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374960861214/defaultProfile.png';
    this.backgroundPicUrl =
      'https://cdn.discordapp.com/attachments/1057177848722489394/1057178374713380945/defaultBanner.png';
  }
}

class item {
  constructor(ownerAddress, collectionAddress, tokenId, metaData) {
    this.ownerAddress = ownerAddress;
    this.collectionAddress = collectionAddress;
    this.tokenId = tokenId;
    this.metaData = metaData;
  }
}

const addDummy = async () => {
  const userDummy = [
    new user('0x0001', 'fUser'),
    new user('0x0002', 'sUser'),
    new user('0x0003', 'tUser'),
  ];
  const collectionDummy = [
    new collection('0x1001', 'fCollection'),
    new collection('0x1002', 'sCollection'),
    new collection('0x1003', 'tCollection'),
  ];
  const itemsDummy = [
    new item('0x0001', '0x1001', 1, 'metamong'),
    new item('0x0002', '0x1001', 2, 'metameta'),
    new item('0x0002', '0x1002', 1, 'metadata'),
    new item('0x0003', '0x1001', 3, 'metaking'),
    new item('0x0003', '0x1002', 2, 'metazzang'),
    new item('0x0003', '0x1003', 1, 'meta'),
  ];
  for (let i of userDummy) {
    await prisma.user.create({ data: i });
  }
  for (let i of collectionDummy) {
    await prisma.collection.create({ data: i });
  }
  for (let i of itemsDummy) {
    await prisma.items.create({ data: i });
  }
};

addDummy();
