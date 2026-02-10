import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="membership"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
