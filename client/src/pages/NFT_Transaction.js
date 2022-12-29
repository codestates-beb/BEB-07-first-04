import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid} from '@mui/material';

import axios from 'axios';
import { ethers } from 'ethers';
import contractAddress from '../contract/ContractAddress';
import contractAbi from '../contract/MakingNFT_ABI'

import { useLocation } from "react-router-dom";

const NFT_Transaction = () => {
    const [imgFile, setImgFile] = React.useState(null);
    const [name,setName] = React.useState('제목');
    const [description,setDescription] = React.useState('설명');
    const [price,setPrice] = React.useState(0);

    
    const location = useLocation();
    const tokenId = location.state.tokenId;
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    makingContract.tokenURI(tokenId).then(e=>{
        // console.log(e);
        axios.get(e).then((res)=>{
            // console.log(res);
            setName(res.data.name);
            setDescription(res.data.description);
            axios.get(res.data.image).then((e)=>{
                // console.log(e.data); 
                setImgFile(e.data);
            });
        });
    });

    const handleClickBuy = async()=>{
        if((name == null || imgFile == null)) { console.log('null'); return false; }
        const ContractWithSigner = await provider.send("eth_requestAccounts", []).then( _=>provider.getSigner()).then(signer=>makingContract.connect(signer));
        
        makingContract.ownerOf(tokenId).then((e)=>{
            ContractWithSigner.functions.transferFrom(e,ethereum.selectedAddress,tokenId);
        })
        
    }

    console.log(tokenId);

    // console.log(makingContract.owner());
    
    // makingContract.ownerOf(tokenId).then((e)=>{
    //     makingContract.balanceOf(e).then((res)=>{console.log(res.toNumber())});
    // });
    // makingContract.balanceOf();

    return (
        <div>
            <h1>NFT 구매하기 </h1>
            
            <div >
                {
                    imgFile ? imgFile && <img src={imgFile} alt="preview-img" /> :
                    <Box  component="span" sx={{p:3 , border: '1px dashed grey' }}>
                        img
                    </Box>
                }    
            </div>
            
            <p> 제목 : {name} </p>
            <p> 설명 : {description} </p>
            <p> 가격 : {price} eth</p>

            <Button variant="contained" onClick={handleClickBuy}>구매하기</Button>
        </div>
    )
}

export default NFT_Transaction;