import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-title">
          Небольшая история
        </div>
        <div className="about-block">
          <img className="about-img" src="https://i.pinimg.com/564x/bf/bd/28/bfbd28afb47b865a97891b909a7cad5f.jpg" alt="..." />
          <div className="about-desc">
            Изначально и актуальной до сегодняшнего дня целью компании
            DC Tuning является создание стильных проектов в области автовинила.
            Качественный материал, мастерская работа и индивидуальный подход,
            помноженные на многолетний опыт – наши характеристики.
            На сегодняшний день работы DC Tuning хорошо известны во многих
            странах, и мы хотим предоставить в ближайшем будущем людям из Европы,
            США возможность пользоваться нашими услугами.
          </div>
        </div>
      </div>
    </div>
  );
}
