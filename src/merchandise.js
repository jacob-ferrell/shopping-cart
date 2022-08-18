import uniqid from 'uniqid';
import atari from './images/gamepads/atari.jpg'
import dreamcast from './images/gamepads/dreamcast.png';
import n64 from './images/gamepads/n64.jpg';
import nes from './images/gamepads/nes.jpg';
import segaSaturn from './images/gamepads/sega-saturn.jpg';
import snes from './images/gamepads/snes.webp';

const images = [atari, dreamcast, n64, nes, segaSaturn, snes];


  const merch = [
    {
      name: 'Atari Gamepad',
      price: 15.99,
    },
    {
      name: 'Dreamcast Gamepad',
      price: 22.99,
    },
    {
      name: 'N64 Gamepad', 
      price: 19.99
    },
    {
      name: 'NES Gamepad', 
      price: 18.99
    },
    {
      name: 'Sega Saturn Gamepad', 
      price: 17.99
    },
    {
      name: 'SNES Gamepad', 
      price: 19.99
    }
  ];
  merch.forEach((item, i) => {
    item.id = uniqid();
    item.image = images[i];
  });

  export default merch;