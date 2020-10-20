// Home.js, just a name of the stack navigation

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ConfirmPassword from "../screens/ConfirmPassword";
import TodoPage from "../screens/TodoPage";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ConfirmSignup from "../screens/ConfirmSignup";
import EmailSending from "../screens/emailSending";
//Now we should use the component create stack navigation from the library react navigation stack to connect the created screens together.

const Home = createStackNavigator(
    {
        //Since the object that’s passed to CreateStackNavigator Login comes first, the Login screen is the default screen of this stack navigator.
        Login: Login,
        TodoPage: TodoPage,
        Signup: Signup,
        ConfirmSignup:ConfirmSignup,
        EmailSending:EmailSending,
        ConfirmPassword:ConfirmPassword,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const container = createAppContainer(Home);

export default container;