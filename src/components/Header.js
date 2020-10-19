import React from 'react';

const Header = ({todosLength}) => {

  return (
    <div className='header'>
    
        <h1>
          <img src='https://www.luby.com.br/wp-content/uploads/2020/05/cropped-iconfav-1-32x32.png' alt='Luby logo'/>
          Todo Luby
        </h1>

        <p>{!todosLength ? '' : todosLength + ' todos found'} </p>
        <br />
        <br />

    </div>
  );
}

export default Header;