const axios = require('axios');

exports.handler = async (event) => {
  const apiKey = process.env.WOO_API_CONSUMER_KEY;
  const apiSecret = process.env.WOO_API_CONSUMER_SECRET;

  const urlAuthSuffix = `?consumer_key=${apiKey}&consumer_secret=${apiSecret}`;
  const BASE_URL = 'https://app.gsculpt.com/wp-json/wc/v3';

  const getProductData = async () => {
    const res = await axios.get(`${BASE_URL}/products${urlAuthSuffix}`);
    const products = res.data
    const filteredProducts = products.map(ele => {
      return {
        id: ele.id,
        name: ele.name,
        slug: ele.slug,
        features: ele.featured,
        price: ele.price,
        weight: ele.weight,
        dimensions: ele.dimensions,
        default_attributes: ele.default_attributes,
        images: ele.images,
        categories: ele.categories,
        attributes: ele.attributes,
        variations: ele.variations,
        tags: ele.tags,
        stock_status: ele.stock_status
      }
    })
    return filteredProducts
  };
    const finalProducts = await getProductData()
    const variations = ele.variations
    
    const getVariationData = async (productId, varId) => {
      
    }
    
    const fullVariationData = variations.map(async (varNum) => {
    const res = await axios.get(`${BASE_URL}/products/${ele.id}/variations/${varNum}${urlAuthSuffix}`)
    return res.data


  try {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify(finalProducts),
    };
  return response;
  } catch(err) {
    return console.error(err)
  }
};
