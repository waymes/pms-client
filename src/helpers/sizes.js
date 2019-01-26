import withSizes from 'react-sizes'

export default ({ withMobile, withTablet, withDesktop }) => {
  const mapSizesToProps = ({ width }) => {
    const config = {};
    if (withMobile) {
      config.isMobile = width < 576;
    }
    if (withTablet) {
      config.isTablet = width >= 576 && width < 768;
    }
    if (withDesktop) {
      config.isDesktop = width >= 768;
    }
    return config;
  };
  return withSizes(mapSizesToProps);
};