let temp=document.getElementById('temp')
let tempHum=document.getElementById('humidity')
let feelsLike=document.getElementById('feels-like')
let cityName=document.getElementById('city')
let desc=document.getElementById('description')
let img=document.getElementById('img')





document.getElementById('search-button').addEventListener('click',async()=>{
    var city = document.getElementById('city-input').value;
    console.log( city);
    const url=`https://api.weatherapi.com/v1/current.json?key=d29249ec3cc746028b042715242708&q=${city}&aqi=no`;
    document.getElementById('city-input').value=""
    let res= await fetch(url);
   
    let data =await res.json()
     temp.innerText=`${data.current.temp_c}°C` ;
     feelsLike.innerText=`Feels like: ${data.current.temp_c + 2.1}°C`;
     tempHum.innerText=`Humidity: ${data.current.humidity}%`;
     cityName.innerText=data.location.name ;
    if(data.current.temp_c>30){
        desc.innerText="Sunny";
        img.src="https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    else if(data.current.temp_c<30 && data.current.temp_c>19){

        desc.innerText="Normal ";
        img.src=" https://images.unsplash.com/photo-1533812451773-f2b04c2bdeb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       
       
    }else if(data.current.temp_c<20){
        desc.innerText="Rainy ";
        img.src="https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }



    console.log(data);
}
);






