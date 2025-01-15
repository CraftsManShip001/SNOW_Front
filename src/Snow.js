import './Snow.scss';
import axios from 'axios';
import React from "react";
import {useState} from "react";



function Snow() {
  const getSnow = async (city) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/snow`,{
          city:city
        });
        return [response.data.temp,response.data.rain,response.data.snow];
    } catch (error) {
        return null;
    }
  }


  let [temp,setTemp] = useState('뭘까요?');
  let [rain,setRain] = useState('뭘까요?');
  let [snow,setSnow] = useState('뭘까요?');
  const [city, setCity] = useState('서울');
  return (
    <div className='container'>
      <h1>눈을 예측해드립니다</h1>
      <h3>온도 : <span>{temp}</span> C</h3>
      <h3>강수량 : <span>{rain}</span> mm</h3>
      <h3>내가 생각하는 지금 눈이 내려질 확률 : <span>{snow}</span> %</h3>
      <form>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value='Seoul'>서울</option>
          <option value='Incheon'>인천</option>
          <option value='Busan'>부산</option>
          <option value='Daegu'>대구</option>
          <option value='Daejeon'>대전</option>
          <option value='Gwangju'>광주</option>
          <option value='Ulsan'>울산</option>
        </select>
      </form>
      <button onClick={async()=>{
        const total = await getSnow(city);
        setTemp(total[0]);
        setRain(total[1]);
        setSnow(total[2]?.toFixed(3) || '0.000');

      }}>예측해주세요!</button>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
    </div>
  );
}

export default Snow;
