import { withSettingsGradle } from '@expo/config-plugins';
const withUpdateSettingsGradle = (config) => {
    return withSettingsGradle(config, (config) => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = setSettingsGradle(config.modResults.contents);
        }
        else {
            throw new Error('Cannot modify settings.gradle.kts');
        }
        return config;
    });
};
const setSettingsGradle = (settingsGradle) => {
    let newSettingsGradle = settingsGradle;
    newSettingsGradle += `
include ':react-native-contacts'
project(':react-native-contacts').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-contacts/android')
`;
    return newSettingsGradle;
};
export default withUpdateSettingsGradle;
//# sourceMappingURL=withUpdateSettingsGradle.js.map