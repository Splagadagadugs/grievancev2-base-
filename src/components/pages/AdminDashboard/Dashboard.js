import React from 'react'

import './DashboardMP.css'

function Dashboard({handleLogout}) {
  return (

    <section className="login">
            
    <div className='loginContainer'>
      
       <div className='btnContainer'>
          <button onClick={handleLogout} className='btn2'>Logout</button>              
       </div>
    </div>
  
</section>
   
  )
}

export default Dashboard;