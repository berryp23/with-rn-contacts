import { ConfigPlugin, withPodfileProperties } from '@expo/config-plugins';

const withUpdatePodfile: ConfigPlugin = (config) => {
  return withPodfileProperties(config, (config) => {
    config.modResults = setPodfileProperties(config.modResults);
    return config;
  });
};

const setPodfileProperties = (podfile) => {
  let newPodfile = podfile;
  newPodfile += `
  pod 'react-native-contacts', :path => '../node_modules/react-native-contacts'
  `;
  return newPodfile;
};

export default withUpdatePodfile;
