import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NativeTabs
        backgroundColor={'#303030'}
        indicatorColor={'#212121'}
        rippleColor={"white"}
        tintColor={'white'}
        labelStyle={{ selected: { color: 'white' } }}

      >
        <NativeTabs.Trigger name="list">
          <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
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
    </>
  );
}
