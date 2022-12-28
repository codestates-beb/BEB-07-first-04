import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Exploreitem from './Exploreitem';
import useIntersect from "./useIntersect";

import './Exploreitems.css'

const Exploreitems = ({category}) => {
    const fakeFetch = (delay = 2000) => new Promise(res => setTimeout(res, delay));
    const [state, setState] = useState({ itemCount: 9, isLoading: false });

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
        <div className='explore-exploreitems'>
            {[...Array(itemCount)].map((e) => {
                //return <Link to='/collection/e.collectionTitle'>
                //<Exploreitem bgImgUrl = {bgImgUrl} imgUrl = {imgUrl} collectionTitle = {collectionTitle}></Exploreitem>
                //<Link>;
                return <Link to='#'> 
                            <Exploreitem></Exploreitem>
                        </Link>;
            })}
            <div ref={setRef} className="Loading">

                {isLoading 
                    &&<div class="loading-container">
                        <div class="loading"></div>
                        <div id="loading-text">OPEN C</div>
                    </div>
                }
            </div>
        
        </div>
    );
};

export default Exploreitems;