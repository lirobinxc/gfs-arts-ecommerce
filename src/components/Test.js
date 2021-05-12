import React, { useEffect, useState } from 'react';
import getWooData from '../utils/AWS_getWooData';

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* Check if session cache exists. If not, create it. */
    const cachedData = JSON.parse(sessionStorage.getItem('productData'));
    if (cachedData) {
      setData(cachedData);
      console.log('📣 USING SESSION STORAGE', { cachedData });
      return;
    }

    /* Fetch data from API if user first visit (no cache) */
    const fetchData = async () => {
      const products = await getWooData();
      console.log('📣', { products });
      setData(products);
      sessionStorage.setItem('productData', JSON.stringify(products));
    };
    fetchData();
  }, []);

  console.log('rendering Test');
  return (
    <div>
      {data.map((ele) => (
        <h2>{ele.name}</h2>
      ))}
    </div>
  );
};

export default Test;
