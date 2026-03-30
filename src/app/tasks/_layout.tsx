import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

export default function TasksLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Tasks",
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