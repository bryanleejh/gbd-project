import { OPEN, CLOSE } from './Menu.types';

export const openMenu = () => {
  console.log('open');
  return {
    type: OPEN,
  };
};

export const closeMenu = () => {
  console.log('close');
  return {
    type: CLOSE,
  };
};