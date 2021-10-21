import { Link } from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'Components/TopHeader/styles.scss'

export const TopHeader = () => {
  return (
    <div className={'topDiv'}>
      <p className={'pa'}>
        <b> DAILY FASHION</b>
      </p>
      <p className={'pa'}>
        <b> FREE SHIPPING</b>
      </p>
      <Link to={'/cart'}>
        {' '}
        <AiOutlineShoppingCart className={'cartIcon'} />{' '}
      </Link>
    </div>
  )
}
