class Fetch {
    async getCurrent(input) {
      const myKey = "c0b41b78dbafd84aa17b3a6e5dd1dcdb";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }