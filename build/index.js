import { withPlugins } from '@expo/config-plugins';
import withUpdateAppBuildGradle from './android/withUpdateAppBuildGradle';
import withUpdateSettingsGradle from './android/withUpdateSettingsGradle';
import withUpdateMainApplication from './android/withUpdateMainApplication';
const withRNContacts = (config) => {
    return withPlugins(config, [
        withUpdateSettingsGradle,
        withUpdateAppBuildGradle,
        withUpdateMainApplication,
    ]);
};
export default withRNContacts;
//# sourceMappingURL=index.js.map