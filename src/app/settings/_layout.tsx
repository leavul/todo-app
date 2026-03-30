import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

export default function SettingsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"

                options={{
                    title: "Settings",
                    headerLargeTitleEnabled: true,
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#303030' : undefined,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
        </Stack>
    )
}