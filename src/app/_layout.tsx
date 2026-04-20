import '@/i18n/i18next';
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useTranslation } from "react-i18next";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  const { t } = useTranslation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <KeyboardProvider>
        <NativeTabs
          backgroundColor={'#303030'}
          indicatorColor={'#212121'}
          rippleColor={"white"}
          tintColor={'white'}
          labelStyle={{ selected: { color: 'white' } }}
          disableTransparentOnScrollEdge={true}
          shadowColor='#555555'
        >
          <NativeTabs.Trigger name="tasks">
            <NativeTabs.Trigger.Label>{t('tasks.title')}</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf={{ default: 'list.bullet.clipboard', selected: 'list.bullet.clipboard.fill' }}
              md="checklist"
            />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="settings">
            <NativeTabs.Trigger.Label>{t('settings.title')}</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf={{ default: 'gearshape', selected: 'gearshape.fill' }}
              md="settings"
            />
          </NativeTabs.Trigger>
        </NativeTabs>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
