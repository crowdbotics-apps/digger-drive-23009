import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179202Navigator from '../features/Maps179202/navigator';
import Additem179201Navigator from '../features/Additem179201/navigator';
import Maps179197Navigator from '../features/Maps179197/navigator';
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
Maps179202: { screen: Maps179202Navigator },
Additem179201: { screen: Additem179201Navigator },
Maps179197: { screen: Maps179197Navigator },
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
