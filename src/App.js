import React, { Component } from 'react';
import MenuUtama from './Page/MenuUtama';

class App extends Component {

  render(){
    return(
      <div>
        <BagHeader />
        <MenuUtama />
        <BagFooter />
      </div>
    );
  }

}

const BagHeader = () => {
  return(
    <h2>Ini Halaman Untuk Header</h2>
  );
};

const BagFooter = () => {
  return(
    <h2>Ini Halaman Untuk Footer</h2>
  );
};

export default App;
