import { isIOS26Plus } from '@/utils/device';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

export default function SettingsLayout() {
    const { t } = useTranslation();

    return (
        <Stack>
            <Stack.Screen
                name="index"

                options={{
                    title: t('settings.title'),
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