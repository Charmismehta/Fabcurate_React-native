/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../homeScreen';

import {
  Home,
  HomeDisable,
  Offer,
  OfferDisabale,
  CartDisable,
  ShoppingCart,
  More,
  MoreDisable,
  Company,
  CompanyDisable,
} from '../../utils/images/icon';
// import OfferScreen from '../TabBar/OfferScreen';
// import CartScreen from '../TabBar/cartScreen';
import {Text, View} from 'react-native';
import CategoryScreen from '../categoryScreen';

const Tab = createBottomTabNavigator();
var selectedIndex = 0;

const MyTabs = ({navigation}) => {
  var index =
    navigation.getState().routes[0].state === undefined
      ? 0
      : navigation.getState().routes[0].state.index;

  return (
    <CustomTabBar>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopWidth: index === selectedIndex ? 5 : 0,
            borderTopColor: index && '#C7C996',
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#C7C996' : color, fontSize: 15}}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? <Home /> : <HomeDisable />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#C7C996' : color, fontSize: 14}}>
                Category
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? <OfferDisabale /> : <Offer />;
            },
          }}
          name="Category"
          component={CategoryScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#C7C996' : color, fontSize: 14}}>
                CJRate
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? <Company /> : <CompanyDisable />;
            },
          }}
          name="CJRate"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{color: focused ? '#C7C996' : color}}>Sale</Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? <ShoppingCart /> : <CartDisable />;
            },
          }}
          name="Sale"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{color: focused ? '#C7C996' : color}}>More</Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? <More /> : <MoreDisable />;
            },
          }}
          name="More"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </CustomTabBar>
  );
};
const CustomTabBar = ({children, gradientColors}) => {
  return <View style={{flex: 1}}>{children}</View>;
};
export default MyTabs;
