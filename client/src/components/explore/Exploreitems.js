import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Exploreitem from './Exploreitem';
import useIntersect from "./useIntersect";

import './Exploreitems.css'
import dummyData from '../dummyData';

const Exploreitems = ({category}) => {
    const fakeFetch = (delay = 2000) => new Promise(res => setTimeout(res, delay));
    const [state, setState] = useState({ itemCount: 9, isLoading: false });

    const nftData = dummyData;
    const sortedNftData = dummyData.filter(e=>e.category===['Trending','Top'].at(category));
    sortedNftData.push( ...nftData.filter(e=>e.category!==['Trending','Top'].at(category)));

    const fetchItems = async () => {
        setState(prev => {console.log(prev);return { ...prev, isLoading: true }});
        await fakeFetch();
        setState(prev => ({
            itemCount: prev.itemCount + 9,
            isLoading: false
        }));
    };

    const [_, setRef] = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target);
        await fetchItems();
        observer.observe(entry.target);
    }, {});

    const { itemCount, isLoading } = state;

    return (
        <>
            <div className='explore-exploreitems'>
                {
                    sortedNftData.map((e,i)=>{
                        if(i<itemCount) return <Link to={'/collection/' + e.collectionName.replace(/ /gi,'-')}>
                        <Exploreitem bgImgUrl = {e.backgroundPicUrl} imgUrl = {e.profilePicUrl} collectionTitle = {e.collectionName}></Exploreitem>
                        </Link>
                    })
                }        
                        
            
            </div>

            <div ref={setRef} className="Loading">
            {isLoading 
                &&<div class="loading-container">
                    <div class="loading"></div>
                    <div id="loading-text">OPEN C</div>
                </div>
            }
            </div>
        </>
    );
};

export default Exploreitems;