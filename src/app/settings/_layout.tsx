import { isIOS26Plus } from '@/utils/device'
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
                        backgroundColor: Platform.OS === 'android' || !isIOS26Plus ? '#303030' : undefined,
                    },
                    headerShadowVisible: true,
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
        </Stack>
    )
}