import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconNotFound } from '../assets/not-found-page.svg';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';

const styles = {
  container: {
    with: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f8fb',
    color: '#262b40',
  },
  inner_block: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 'calc(1.375rem + 1.5vw)',
    marginTop: '50px',
    fontWeight: '300',
    fontFamily: "Nunito Sans",
    textAlign: 'center',
  },
  text_bold: {
    fontWeight: '900'
  },
  btn_home: {
    border: 'none',
    marginTop: '30px',
    backgroundColor: '#262c3f',
    textDecoration: 'none',
    color: '#fff',
    fontFamily: "Nunito Sans",
    boxShadow: 'inset 0 1px 0 hsl(0deg 0% 100% / 15%), 0 1px 1px rgb(46 54 80 / 8%)',
    padding: '12px 17px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: '.2s linear'
  },
  chevron: {
    marginRight: '7px',
    transition: '.2s linear'
  }
}


const NotFound = () => {
  const navigate = useNavigate();
  const chevron = useRef();
  const button = useRef();

  const goBack = () => {
    navigate('/');
  }
  const slideRight = () => {
    chevron.current.style.transform = 'translateX(-5px)'
    button.current.style.backgroundColor = '#191d2b'
  }
  const slideLeft = () => {
    chevron.current.style.transform = 'translateX(0px)'
    button.current.style.backgroundColor = '#262c3f'
  }

  return (
    <div style={styles.container}>
      <div style={styles.inner_block}>
        <IconNotFound/>
        <h1 style={styles.text}>Page not <span style={styles.text_bold}>found</span></h1>
        <button 
          ref={button}
          style={styles.btn_home}
          onMouseOver={slideRight}
          onMouseOut={slideLeft}
          onClick={goBack}
        >
          <ChevronLeft ref={chevron} style={styles.chevron}/>
          Go back home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
