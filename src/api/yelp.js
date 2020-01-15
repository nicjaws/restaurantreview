import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer 0Pd1WGYgB8YQi_w5zdve0oa9nO0DRwnBDr0KpDZAmBh1wQK4fOqZeO2BKiUycDO_Krn5zIxcZH4hoBVr7TU3GBoxI4ej9H6d2aZHgzBlAjT_a7nTWycNuJDXrrIdXnYx'
  }
});

