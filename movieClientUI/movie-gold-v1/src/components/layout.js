import {Outlet} from 'react-router-dom';

import react from 'react'

const layout = () => {
  return(
    <main>
        <Outlet/>
    </main>
  )
}

export default layout