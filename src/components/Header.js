import React from 'react';

const Header = ({todosLength}) => {

  return (
    <div className='header'>
    
        {/* <h1>
          <img src='https://www.luby.com.br/wp-content/uploads/2020/05/cropped-iconfav-1-32x32.png' alt='Luby logo'/>
          Todo Luby
        </h1> */}

        <h3>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='React logo'/>
          React Todo Redux LocalStorage
        </h3>

        <p>{!todosLength ? '' : todosLength + ' todos found'} </p>
        <br />
        <br />

    </div>
  );
}

export default Header;