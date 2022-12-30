import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './item.css';

const Item = (props) => {
  const [collectionName, setCollectionName] = useState('');
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/collection/info';
    axios
      .put(apiUrl, { contractAddress: props.contractAddress })
      .then((res) => {
        setCollectionName(res.data.content.collectionName);
      });
  }, []);
  const onClickHandler = () => {
    window.location.replace('http://localhost:3000');
  };
  const JSONmetadata = props.metadata;
  const metadata = JSON.parse(JSONmetadata);
  return (
    <div key={props.className} id="id_div" onClick={onClickHandler}>
      <img src={metadata.image} id="item_img" alt="item img"></img>
      <p id="item_name">{metadata.name}</p>
      <p id="item_collection">{collectionName}</p>
    </div>
  );
};

export default Item;
