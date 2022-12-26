import * as React from 'react';

import Button from '@mui/material/Button';


const NFT_Making = () => {
    const [imgFile, setImgFile] = React.useState(null);
    const [name,setName] = React.useState(null);
    const [description,setDescription] = React.useState(null);

    const handleImgChange = (e)=>{
        const curImgFile = e.target.files[0];
        console.log(curImgFile);
        const reader = new FileReader();
        reader.readAsDataURL(curImgFile);
        reader.onload = function() {
            setImgFile(reader.result);
        }
    }

    const handleClickCreate = ()=>{
        if((name == null || imgFile == null)) { console.log('null'); return false; }
    }

    return (
        <div>
            <h1>NFT 만들기 </h1>
            <div className="preview">
                {imgFile && <img src={imgFile} alt="preview-img" />}
            </div>
            <input
                type='file'
                onChange={handleImgChange}
            />
                
            <p> 제목</p>
            <input onchage={(e)=>setName(e)} />
            <p> 설명</p>
            <input onchage={(e)=>setName(e)} />
            
            <p> </p>
            <Button variant="contained" onClick={handleClickCreate}>Create</Button>
        </div>
    )
}

export default NFT_Making;