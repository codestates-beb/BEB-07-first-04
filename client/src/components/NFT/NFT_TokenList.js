import { ethers } from 'ethers';
import contractAddress from '../../contract/ContractAddress';
import contractAbi from '../../contract/MakingNFT_ABI'
const tokenList = ()=>{
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    makingContract.balanceOf(ethereum.selectedAddress).then((e) => {
        let totalNFT = e.toString();  
        console.log(totalNFT);
        for(let i = 0; i< totalNFT; i++){
            
            makingContract.tokenURI(i).then((e) => {
            console.log(i,e);
            tokenList
    
            });
            
        }
    });
}

export default tokenList;