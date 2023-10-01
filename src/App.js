import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
// You can import from local files
import {PullToAction} from './components/PullToAction';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tailwind from 'twrnc';

export default function App() {
  return (
    <GestureHandlerRootView
      style={tailwind.style('flex-1 justify-center bg-gray-100')}>
      <SafeAreaProvider>
        <PullToAction />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
