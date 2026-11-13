
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    House,
    Dumbbell,
    ChartNoAxesCombined,
    UserRound,
} from "lucide-react-native";

import HomeScreen from "../pages/Home/HomeScreen";
import WorkoutsScreen from "../pages/Workouts/WorkoutsScreen";
import EvolutionScreen from "../pages/Evolution/EvolutionScreen";
import ProfileScreen from "../pages/Profile/ProfileScreen";

import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,

                    tabBarActiveTintColor: colors.primaryDark,
                    tabBarInactiveTintColor: colors.textLight,

                    tabBarStyle: {
                        backgroundColor: "#FFFAFB",
                        borderTopColor: colors.border,
                        height: 68,
                        paddingTop: 8,
                        paddingBottom: 8,
                        elevation: 0,
                    },

                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: "500",
                    },
                }}
            >
                <Tab.Screen
                    name="Início"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <House color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Treinos"
                    component={WorkoutsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Dumbbell color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Evolução"
                    component={EvolutionScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <ChartNoAxesCombined
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <UserRound color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
