import Reactotron, { trackGlobalErrors, openInEditor } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const Tron = () => {
  if (__DEV__) {
    const tron = Reactotron.configure()
      .useReactNative()
      .use(trackGlobalErrors())
      .use(openInEditor())
      .use(reactotronRedux())
      .use(sagaPlugin())
      .connect();
    tron.clear();
    console.tron = tron;
    return tron;
  }
  return {};
};

export default Tron();
