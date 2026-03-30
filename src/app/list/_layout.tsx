import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

export default function ListLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "List",
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