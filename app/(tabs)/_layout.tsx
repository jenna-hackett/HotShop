import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="calendar-month" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="membership"
        options={{
          tabBarIcon: () => (
            <Ionicons name="bag-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
