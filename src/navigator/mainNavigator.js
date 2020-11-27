import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile179193Navigator from '../features/UserProfile179193/navigator';
import Maps179149Navigator from '../features/Maps179149/navigator';
import Additem179148Navigator from '../features/Additem179148/navigator';
import Maps179144Navigator from '../features/Maps179144/navigator';
import UserProfile179140Navigator from '../features/UserProfile179140/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile179193: { screen: UserProfile179193Navigator },
Maps179149: { screen: Maps179149Navigator },
Additem179148: { screen: Additem179148Navigator },
Maps179144: { screen: Maps179144Navigator },
UserProfile179140: { screen: UserProfile179140Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
