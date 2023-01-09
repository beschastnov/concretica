import React, { useEffect, useState } from 'react';
import './style.css';

export default function Header() {
  const [showBtn, setShowBtn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showContacts, setShowContacts] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowBtn(true);
      // setShowContacts(true);
    }, 2000);
  }, []);
  return (
    <div className="conteiner-head">
      {showContacts ? (
        <div className="contacts">
          <div className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#ffffff', marginRight: '7px' }} width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <div> 8 (999) 999 99-99 </div>
          </div>
          <div className="e-mail">
            <div> contacts@concretica.ru </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#ffffff', marginLeft: '7px' }} width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="contacts" />
      )}
      <div className="head">
        <div className="head-block-left">
          <div>concretica</div>
          <div className="desc">detailing studio</div>
        </div>
        <div className="head-block-right">
          Культура ухода за Вашим авто.
        </div>
      </div>
      {showBtn ? (
        <button type="button" className="head-btn">
          <i className="arrow down" />
        </button>
      ) : (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className="head-btn-none" />
      )}
    </div>
  );
}
