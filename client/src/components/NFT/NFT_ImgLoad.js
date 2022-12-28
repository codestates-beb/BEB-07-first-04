import axios from 'axios';
import { ethers } from 'ethers';
import contractAddress from '../../contract/ContractAddress';
import contractAbi from '../../contract/MakingNFT_ABI'

const imgLoad = async (tokenId)=>{
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    let imgURL = '';
    // console.log(makingContract);
    // makingContract.tokenURI(tokenId).then(console.log);
    let k = makingContract.tokenURI(tokenId).then(e=>{
        // console.log(e);
        axios.get(e).then((res)=>{
            // console.log(res);
            axios.get(res.data.image).then((e)=>{
                console.log(e.data); 
                imgURL = e.data;
            });
        });
        return imgURL;
    });
    console.log(k);
    
    
}


export default imgLoad;