import { OPEN, CLOSE } from './Menu.types';

export const openMenu = () => {
  return {
    type: OPEN,
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE,
  };
};