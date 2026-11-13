
import React, { useEffect, useState } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import {
    CormorantGaramond_600SemiBold,
} from "@expo-google-fonts/cormorant-garamond";

import {
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
} from "@expo-google-fonts/manrope";

import AppNavigator from "./src/navigation/AppNavigator";
import { initializeDatabase } from "./src/database/database";

export default function App() {
    const [fontsLoaded] = useFonts({
        CormorantGaramond_600SemiBold,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
    });

    const [databaseReady, setDatabaseReady] = useState(false);
    const [databaseError, setDatabaseError] = useState(false);

    useEffect(() => {
        async function setupDatabase() {
            try {
                await initializeDatabase();

                setDatabaseReady(true);

                console.log("BloomFit pronto para uso!");
            } catch (error) {
                console.error("Erro ao inicializar o banco:", error);
                setDatabaseError(true);
            }
        }

        setupDatabase();
    }, []);

    if (!fontsLoaded || (!databaseReady && !databaseError)) {
        return null;
    }

    if (databaseError) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    );
}
