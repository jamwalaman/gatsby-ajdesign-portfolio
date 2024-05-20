import * as React from "react"

const PageTitle = ({ title }) => {

  return (
    <div className='page-title'>
      <h1 className='text-center'>{title}</h1>
      <div className='headline-rule'></div>
    </div>
  )
}

export default PageTitle
