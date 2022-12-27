import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ethers } from 'ethers';
import { Buffer } from 'buffer';

import contractAbi from '../contract/MakingNFT_ABI';
import {create} from 'ipfs-http-client';

// const ipfsClient = require("ipfs-http-client");
const contractAddress = '0x13911Cb6899A8fBd771806E17f45B742d11B010f';

const ipfsAddress = 'http://127.0.0.1:5001';

const projectId = '2JULpqFvMACL4Y7410ulfOmqmVF';   // <---------- your Infura Project ID

const projectSecret = '6a9b6c22ef56d8525a14ccdce315c40e';  // <---------- your Infura Secret
// (for security concerns, consider saving these values in .env files)

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const NFT_Making = () => {
    const [imgFile, setImgFile] = React.useState(null);
    const [name,setName] = React.useState('');
    const [description,setDescription] = React.useState(null);

    const client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        apiPath: '/api/v0',
        headers: {
          authorization: auth
        }
      })

    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    const handleImgChange = (e)=>{
        const curImgFile = e.target.files[0];
        console.log(curImgFile);
        const reader = new FileReader();
        reader.readAsDataURL(curImgFile);
        reader.onload = function() {
            setImgFile(reader.result);
        }
    }

    // ipfs 메타데이터 생성 함수들
    const submitImage = async () => {
       
        if(!imgFile) return false;
        // console.log(client);
        try{
          let added = await client.add(
            imgFile,
            {
                progress: (prog) => console.log(`received: ${prog}`)
            }
          )
          console.log(added);
          const url = `https://ipfs.infura.io/ipfs/${added.path}`;
          console.log(url)
          return uploadMetaData(url)
        }catch(e){
          console.log(e)
        }
      }
    
      const uploadMetaData = async (url) => {
        const jsonData = {
          "name": name,
          "description": description,
          "image": url,
        }
    
        const jsonblob = new Blob([JSON.stringify(jsonData)], {type:'application/json'})
        const jsonFile =  new File([jsonblob], 'data.json')
        try{
          let added = await client.add(
            jsonFile,
            {
              progress: (prog) => console.log(`received: ${prog}`)
            }
          )
          return `https://ipfs.infura.io/ipfs/${added.path}?filename=${added.path}`;
          
        }
        catch(e){
          console.log(e)
        }
      }
    //   ipfs 메타데이터 생성 함수들


    const handleClickCreate = async ()=>{
        console.log(name, imgFile);
        if((name == '' || imgFile == null)) { console.log('input is not sain'); return false; }

        const ContractWithSigner = await provider.send("eth_requestAccounts", []).then( _=>provider.getSigner()).then(signer=>makingContract.connect(signer));

        ContractWithSigner.functions.mintNFT(ethereum.selectedAddress, submitImage());
        makingContract.name().then(console.log);
    }

    

    return (
        <div>
            <h1>NFT 만들기 </h1>
            <Box component="span" >
                <div className="preview">
                    {imgFile && <img src={imgFile} alt="preview-img" />}
                </div>
                
                <input
                    type='file'
                    onChange={handleImgChange}
                />
            </Box>
            <p> 제목 </p>
            <p> {name} </p>
            <input onChange={(e)=>setName(e.target.value)} value={name} />
            <p> 설명 </p>
            <input onChange={(e)=>setDescription(e)} />
            
            <p> </p>
            <Button variant="contained" onClick={handleClickCreate}>Create</Button>
        </div>
    )
}

export default NFT_Making;