import React from 'react'
import { Link } from 'react-router-dom'

export default function DarkBlueButton({buttonDetails}) {
    const {buttonPath,buttonName} = buttonDetails;
  return (
    <Link to={buttonPath} className="nav-link nav-signup-link flex bg-themeDarkBlue text-white rounded-full px-5 py-2 w-fit">
        {buttonName}
    </Link>
  )
}
