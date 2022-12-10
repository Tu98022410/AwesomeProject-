import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Switch,
  TabBarIOSItem,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './pags/Home';
import {Post} from './pags/Post';
import {createAppContainer} from 'react-navigator';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { ProfileScreen } from './screens';
// const DrawerNavigator = createDrawerNavigator({
//   ProfileScreen
// });

// export default createAppContainer(DrawerNavigator);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Post" 
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
          component={Post} />
      </Stack.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Header}
          options={{
            tabBarIcon: () => {
              return <Logo />;
            },
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
