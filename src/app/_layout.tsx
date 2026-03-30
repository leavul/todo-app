import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <KeyboardProvider>
        <NativeTabs
          backgroundColor={'#303030'}
          indicatorColor={'#212121'}
          rippleColor={"white"}
          tintColor={'white'}
          labelStyle={{ selected: { color: 'white' } }}

        >
          <NativeTabs.Trigger name="tasks">
            <NativeTabs.Trigger.Label>Tasks</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf={{ default: 'list.bullet.clipboard', selected: 'list.bullet.clipboard.fill' }}
              md="checklist"
            />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="settings">
            <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf={{ default: 'gearshape', selected: 'gearshape.fill' }}
              md="settings"
            />
          </NativeTabs.Trigger>
        </NativeTabs>
      </KeyboardProvider>
    </>
  );
}
