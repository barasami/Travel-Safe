import axios from 'axios';

const options = {
  url: 'https://airbnb13.p.rapidapi.com/search-location',
  params: {
    location: 'Paris',
    checkin: '2023-09-16',
    checkout: '2023-09-17',
    adults: '1',
    children: '0',
    infants: '0',
    pets: '0',
    page: '1',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

export const availableRooms=async()=>{

    try {
        const response = await axios.get(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}