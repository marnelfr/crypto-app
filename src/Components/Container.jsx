import React from 'react'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function Container({ title, children }) {
  const navigate = useNavigate()

  const handleClick = useCallback((e) => {
    e.preventDefault()
    if(window.location.pathname !== '/') {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <header className="text-center">
        <img onClick={handleClick} src="/fav.png" alt="NelDev Logo" />
      </header>
      <section className='container'>
        <header className='text-center m-1 border-bottom'>
          <h3>{title}</h3>
        </header>
        {children}
      </section>
    </>
  );
}