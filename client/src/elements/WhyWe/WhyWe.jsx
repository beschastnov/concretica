import React, { useState } from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import cardPhoto from '../../img/cardphoto.jpeg';
import cabrio from '../../img/cabrio.jpeg';
import m4 from '../../img/m4.jpeg';
import stinger from '../../img/stinger.jpeg';
import toy from '../../img/toy.jpeg';
import kia from '../../img/kia.jpeg';

export default function WhyWe() {
  const [card] = useState([
    { title: 'Люди для людей', photo: cardPhoto, text: 'Наша компания обслуживает прежде всего людей, а не автомобили. Создавая лучшие комфортные условия для наших кадров, мы даем им возможность реализовывать высокое качество работы для гостей нашего детейлинг-центра.' },
    { title: 'Максимальный комфорт', photo: cabrio, text: 'Просторная, охраняемая и удобная локация нашего детейлинг-центра, а так же тихая зона ожидания вкупе создают максимально комфортную атмосферу для наших гостей.' },
    { title: 'Сервисное сопровождение', photo: m4, text: 'Фирменная гарантийная сервисная книжка - обязательное приложение к нашим услугам. Мы всегда документируем визит автомобиля и ведем учет его эстетического состояния в период эксплуатации.' },
    { title: 'Свой сервис автомобильной чистоты', photo: stinger, text: 'Гости,которые уже воспользовались комплексом наших услуг,всегда могут поддерживать идеальное состояние своего авто в нашем моечном подразделении. Паркинг на 6 автомобилей позволит оставить авто на хранение,пока вы занимаетесь делами.' },
    { title: 'Нам доверяют больше чем автодилерам', photo: toy, text: 'Когда мы начали заниматься детейлингом в автосалонах об этих услугах даже не слышали. Абсолютно новые авто еще в упаковке везут сразу к нам.' },
  ]);
  return (
    <div className="why-we" style={{ backgroundImage: `url("http://localhost:3000${kia}")` }}>
      <div className="why-we-count">
        <div className="why-we-title">
          Почему выбирают нас
        </div>
        <div className="conteiner-cards">
          <div className="card-map">
            {card.map((el) => (
              <div className="card" key={uuidv4()}>
                <img className="card-img" src={el.photo} alt="..." />
                <div className="card-info">
                  <div className="card-title">
                    {el.title}
                  </div>
                  <div className="card-text">
                    {el.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
