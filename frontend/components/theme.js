const size = {
  mobile: '',
  tablet: '768px',
  laptopS: '1023px',
  laptopM: '1239px',
  desktop: '1240px',
};

const theme = {
  mainColor: '#000000',
  subColor: '#0a4297',
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
