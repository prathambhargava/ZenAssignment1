import React, { useEffect, useState } from 'react'

const ProductData = () => {
    const [prodData, setprodData] = useState([]);

    //fetching data form the api
    const fetchData = async () => {
        const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

        const data = await fetch(url);
        const productData = await data.json();
        const unfilteredData = Object.values(productData.products);
        // const filteredData = unfilteredData.sort((a, b) => parseInt(b.popularity,10) - parseInt(a.popularity,10));
        const filteredData = unfilteredData.sort((a,b)=> b.popularity.localeCompare(a.popularity))
        // const filteredData = unfilteredData.sort().reverse();
        setprodData(filteredData);
        // console.log("typeof",typeof(parseInt(filteredData[0].popularity)));
        console.log("unfiltered", unfilteredData);
        console.log("filtered", filteredData);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div class="flex items-center justify-center">
            <table class="table-auto border-black ">
                <thead>
                    <tr class="flex justify-around space-x-48 ">
                        <th>Subcategory</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {prodData.map((item) => {
                        // console.log(item)
                        return (
                            <tr class="flex justify-around space-x-48">
                                <td>{item.subcategory}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.popularity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductData;