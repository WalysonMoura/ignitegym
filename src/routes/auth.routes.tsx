import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

// Screens
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

type AppRouters = {
  home: undefined;
  exercise: {
    exerciseId: string;
  };
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRouters>;

const { Navigator, Screen } = createBottomTabNavigator<AppRouters>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} options/>
      <Screen name="History" component={History} />
      <Screen name="profile" component={Profile}/>
      <Screen name="exercise" component={Exercise}/>
    </Navigator>
  );
}
