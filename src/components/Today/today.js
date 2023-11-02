import React, { useEffect } from 'react';
import { Link  } from 'react-scroll';
import '../Today/today.css';
// import work from '../../assests/work.png';
// import college from '../../assests/college.png';
// import user from '../../assests/user.png';
// import others from ''

const Today = () => {
 
  useEffect(() => {
    const dotElements = document.querySelectorAll('.dot');
    dotElements.forEach(dot => {
      const nValue = dot.getAttribute('data-n');
      dot.setAttribute('data-content', nValue + 'PM');
    });
  }, []);

  

  return (
  

  
     <div class="containers" id='today'>
        <h1 className='todayText'>Today</h1>        
        <Link className='dot' data-n={1} ></Link>
        <div className='line'></div>
        <Link className='dot' data-n={2}></Link>
        <div className='line' ></div>
        <Link className='dot' data-n={3}></Link>
        <div className='line' ></div> 
        <Link className='dot' data-n={4}></Link>



  </div>

  )
}

export default Today;
