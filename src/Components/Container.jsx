import React from 'react'

export function Container({ title, children }) {
  return (
    <>
      <header className="text-center">
        <img src="/fav.png" alt="NelDev Logo" />
      </header>
      <section className='container'>
        <header className='text-center m-1'>
          <h3>{title}</h3>
        </header>
        {children}
      </section>
    </>
  );
}