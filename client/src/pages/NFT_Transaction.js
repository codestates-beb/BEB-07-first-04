import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { positions } from '@mui/system';
import { Grid,Container } from '@mui/material';

const NFT_Making = () => {
    const [imgFile, setImgFile] = React.useState(null);
    const [name,setName] = React.useState('제목');
    const [description,setDescription] = React.useState('설명');
    const [price,setPrice] = React.useState(0);

    const handleClickBuy = ()=>{
        if((name == null || imgFile == null)) { console.log('null'); return false; }
    }

    return (
        <Grid>
            <h1>NFT 구매하기 </h1>
            <Grid container spacing={1} >
                <Grid item xs={4}>
                    <div >
                        {
                            imgFile ? imgFile && <img src={imgFile} alt="preview-img" /> :
                            <Box  component="span" sx={{p:3 , border: '1px dashed grey' }}>
                                img
                            </Box>
                        }    
                    </div>
                </Grid>
                
                <Grid item xs={6}>
                    <p> {name} </p>
                    <p> {description} </p>
                    <p> {price} eth</p>

                    <Button variant="contained" onClick={handleClickBuy}>구매하기</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NFT_Making;