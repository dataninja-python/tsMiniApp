import React from 'react'

const currentYear = () => {
  const currDate = new Date()
  return currDate.getFullYear()
}

const Footer = () => {
  const copyRightSymbol = String.fromCodePoint(0x00A9);
  const thisYear = currentYear()
  const copyRightContent = `${copyRightSymbol} 2021 - ${thisYear} | Developed By RedStone Tech`

  return (
    <>
      <footer className='container'>
        <p className='footer'>{copyRightContent}</p>
      </footer>
    </>
  )
}

export default Footer