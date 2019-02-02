import Color from 'color';

export default {
  white: '#FFF',
  lighter: '#EEE',
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',
  primary: '#a8c958',
  primaryDarken: Color('#a8c958').darken(0.15),
  secundary: '#6835ac',
  secundaryLowDarken: Color('#6835ac').darken(0.10),
  secundaryDarken: Color('#6835ac').darken(0.15),
  secundaryHightDarken: Color('#6835ac').darken(0.25),
  success: '#9DCA83',
  danger: '#E37a7a',

  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  hightDarkTransparent: 'rgba(0, 0, 0, 0.8)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
