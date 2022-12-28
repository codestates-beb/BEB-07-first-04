서버 setting

branch 생성
API Root :	http://localhost:8080/api			
URL		Method	Request Body Form(JSON)	ResponseForm
/user	/get	GET	"{
  “walletAddress”:””
}"	"{
  "status" : “Success",
  “content" : {
    “walletAddress” : “”,
    “username” : “”,
    “profilePicUrl” : “”,
    “backgroundPicUrl” : “”,
  }
}"
	/updateusername	POST	"{
  “walletAddress”:””,
  “username”:””
}"	"{
  “status" : “Success",
  "content" : “Username Changed”
}"
	/updateprofpic	POST	"{
  “walletAddress”:””,
  “profilePicUrl”:””
}"	"{
  “status" : “Success",
  "content" : “Profile Picture changed”
}"
	/updatebgpic	POST	"{
  “walletAddress”:””,
  “backgroundPicUrl”:””
}"	"{
  “status" : “Success",
  "content" : “BGPic changed”
}"
/items	/getbycollectionaddr	GET	"{
  “contractAddress” : “”
}"	"{
  “status" : "Success",
  "content" : [
    {
      “Id” : “”,
      “ownerAddress” : “”,
      “tokenId” : “”,
      “price” : “”,
      “isListed” : “”,
      “metaData” : “”,
    }
  ]
}"
	/getbyowneraddr	GET	"{
  “walletAddress” : “"
}"	"{
  “status" : "Success",
  "content" : [
    {
      “Id” : “”,
      “ownerAddress” : “”,
      “tokenId” : “”,
      “price” : “”,
      “isListed” : “”,
      “metaData” : “”,
    }
  ]
}"
	/getmetadata	GET	"{
  "contractAddress" : “",
  “tokenId” : “”,
}"	"{
  “status" : “Success",
  "content" : “${metadata}”
}"
/collection	/info	GET	"{
  “contractAddress” : “"
}"	"{
  “status” : ”Success”,
  “content” : {
    “contractAddress” : “”,
    “collectionName” : “”,
    “profilePicUrl” : “”,
    “backgroundPicUrl” : “”
  }
}"
	/data	GET	"{
  “contractAddress” : “"
}"	"{
  “status” : “Success",
  “content" : {
    “collectionInfo” : {
      “contractAddress” : “”,
      “collectionName” : “”,
      “profilePicUrl” : “”,
      “backgroundPicUrl” : “”
    },
    “collectionItems” : [
      {
        “Id” : “”,
        “ownerAddress” : “”,
        “tokenId” : “”,
        “price” : “”,
        “isListed” : “”,
        “metaData” : “”,
      }, …
    ]
  }"