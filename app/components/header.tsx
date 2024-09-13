import React, { FC } from 'react'


interface HeaderPorps {
    title: string;
}

const Header: FC<HeaderPorps> = ({ title }) => {
  return (
    <header>
      <h1 className='text-5xl font-bold'>{title}</h1>
    </header>
  )
}

export default Header
