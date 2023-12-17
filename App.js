import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './pages/GetStarted';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SignUp from './pages/SignUp';
import Confirmation from './pages/Confirmation';
import MapScreen from './pages/MapScreen';
import Search from './pages/Search';
import FullPage from './pages/FullPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    
     <NavigationContainer>
       <Stack.Navigator
       
       >
      <Stack.Screen name="Home" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name='Confirmation' component={Confirmation} options={{headerShown:false}}/>
      <Stack.Screen name='mapScreen' component={MapScreen} options={{headerShown:false}}/>
      <Stack.Screen name='search' component={Search} options={{headerShown:false }}/>
      <Stack.Screen name='FullPage' component={FullPage} options={{headerShown:false , cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            };
          },}}/>
          </Stack.Navigator>
    </NavigationContainer>
    

       
  
  
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
