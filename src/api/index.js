import * as axios from 'axios'



var axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });


export const getHeroApi = () => {
   return axiosInstance.get('./testData.json')
        .then(res=>res.data)
}

export const newHeroApi = (heroData) => {
  console.log(`Set new Hero ${heroData.name}`);
  return heroData;
}

export const delHeroApi = (heroId) => {
  return console.log(`Hero id ${heroId} is DELETED`);
}

export const updateHeroApi = (heroData) => {
  console.log(`Data of Hero id ${heroData.id} is changed`)
  return heroData
        
}

