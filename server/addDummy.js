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
    new user('0xcd0510aecd00bdd36ac9272f1a905bf775753355', 'Minseob'),
  ];
  const collectionDummy = [
    new collection('0x1001', 'fCollection'),
    new collection('0x1002', 'sCollection'),
    new collection('0x1003', 'tCollection'),
  ];
  const itemsDummy = [
    new item(
      '0xcd0510aecd00bdd36ac9272f1a905bf775753355',
      '0x1001',
      1,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://i.seadn.io/gae/5NMpCk1OKA6bVonwrQO76sxTQ2Rt-VM9HFynsg0B7rP8Z4v0baFmfuo9NyHmdeaAZjf_SOpLY0OTMKk8vEbZDzsnZ18qrYDS3HZWuA?auto=format&w=750", 
      "name": "first NFT"
    }`
    ),
    new item(
      '0x0002',
      '0x1001',
      2,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://i.seadn.io/gae/ZB_obpIEr5sOeXh56u6Y2NLDQAG-eIJRvAceHGaaV07vNPucTjX0k9zc8a9bM_3vV4NXokr46i3k-jY4Cjf_gdLx60SFqkhrOPaj?auto=format&w=750", 
      "name": "second NFT"
    }`
    ),
    new item(
      '0xcd0510aecd00bdd36ac9272f1a905bf775753355',
      '0x1002',
      1,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://i.seadn.io/gae/9W1YRF-lCsRkgx0Dzdq-QW2wuKd_fTniehvW6mJRXFAhb7_4GivT7fzf2D60x6P0Dxtha93o1mE8xi0C-h5etGfvaq4VPxaALAR1cKM?auto=format&w=750", 
      "name": "third NFT"
    }`
    ),
    new item(
      '0xcd0510aecd00bdd36ac9272f1a905bf775753355',
      '0x1001',
      3,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://i.seadn.io/gcs/files/5ab87ab2d5ab6e58e46905e99f984989.png?auto=format&w=750", 
      "name": "forth NFT"
    }`
    ),
    new item(
      '0x0003',
      '0x1002',
      2,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://openseauserdata.com/files/833008f72ceff831eb56e02e0c969721.svg", 
      "name": "fifth NFT"
    }`
    ),
    new item(
      '0xcd0510aecd00bdd36ac9272f1a905bf775753355',
      '0x1003',
      1,
      `{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "https://i.seadn.io/gae/1tls-dYN4NOzE-TY_X1fAj78QoQinCH8m4zeTsjcnGag7S3jZ_YgjOJk1Tnaq4hecrGg13UTQ0TOZS_-KxC_jgYqqAHpiPuPIJtW?auto=format&w=750", 
      "name": "sixth NFT"
    }`
    ),
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
