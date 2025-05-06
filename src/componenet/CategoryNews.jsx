import React, { useEffect, useState } from 'react';
import CategoryNewsCard from './CategoryNewsCard';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    console.log(id, data, category)

    useEffect(() => {
        const category = data.find((eventCard) => eventCard.id == id)
        setCategory(category);
    }, [data, id]);

    return (
        <div>
            <h1>Caregory pages</h1>
            <CategoryNewsCard category={category}></CategoryNewsCard>
        </div>
    );
};

export default CategoryNews;