API
http://localhost:8080/api

### [POST] /getuser
- request
```
{
  "walletAddress" : "0x-"
}
```
- response
```
{
  "walletAddress" : "0x-",
  "username" : "unnamed",
  "profilePicUrl" : "http",
  "backgroundPicUrl" : "http"
}
```

### [POST] /getcollection
- request
```
{
  "walletAddress" : "0x-"
}
```
- response
```
{
  "walletAddress" : "0x-",
  "username" : "unnamed",
  "profilePicUrl" : "http",
  "backgroundPicUrl" : "http"
}
```

### [POST] /itemsbyowner
- request
```
{
  "walletAddress" : "0x-"
}
```
- response
```
[
  {
    "ownerAddress" : "0x-",
    "collectionAddress" : "0x-",
    "tokenId": "0",
    "price": "0",
    "isListed": "false",
    "metaData": {}
  }
]
```


### [POST] /itemsbycollection
- request
```
{
  "walletAddress" : "0x-"
}
```
- response
```
[
  {
    "ownerAddress" : "0x-",
    "collectionAddress" : "0x-",
    "tokenId": "0",
    "price": "0",
    "isListed": "false",
    "metaData": {}
  }
]
```