import React, {Component} from 'react';
import MenuKontak from './MenuKontak';
import MenuProduct from './MenuProduct';
import MenuTentangKami from './MenuTentangKami';

class MenuUtama extends Component {
  render(){
    return(
      <div>Ini Halaman Menu Utama
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
      </div>
    );
  }
}

export default MenuUtama;
