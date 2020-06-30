import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import {Provider as BlogProvider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
    {
        'POSTS LIST': IndexScreen,
        'SHOW POST': ShowScreen,
        'CREATE POST': CreateScreen,
        'EDIT POST': EditScreen
    },
    {
        initialRouteName: 'POSTS LIST',
        defaultNavigationOptions: {
            headerTintColor: '#1c6172',
            headerStyle: {
                backgroundColor: '#fff',
            }
        },
    }
);
const App = createAppContainer(navigator)

export default () => <BlogProvider><App/></BlogProvider>
