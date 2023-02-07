import logo from './logo.svg';
import './App.css';
import React from 'react';
import photo1 from './imgs/img.jpeg';
import {base64Photo}from './Constant';
import Logo from './logo.svg';
import DeleteIcon from './DeleteIcon';

export default function App(){
  return (
    <div className='container'>
      <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
      <img src={photo1} width="200" height="100" className='img'/>
      <div className='require-title'>Đây là ảnh dùng require</div>
      <img src={require('./imgs/img.jpeg')} className="img2"/>
      <div className='require-title'>Đây là ảnh dùng link online</div>
      <img src='https://imgur.com/0BJobQo.jpg' className='img2'/>
      <div className='require-title'>anh dung base64</div>
      <img src={base64Photo} className='img3'/>
      <div className='require-title'>anh dung svg</div>
      <img src={Logo} className='img3'/>
      <DeleteIcon/>
    </div>
  );
}


