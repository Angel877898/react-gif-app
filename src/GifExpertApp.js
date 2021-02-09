import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['serie 1', 'serie 2', 'serie 3']
    const [categories, setCategories]=useState(['The 100'])

    // const handleAdd = () => {
    //     const nueva = 'new serie'
    //     setCategories([...categories,nueva])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;    