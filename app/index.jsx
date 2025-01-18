import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aoraaaaa</Text>
      <StatusBar style="auto" />
      <Link href="/profile">
        <Text style={{ color: 'blue' }}>Go back to profile</Text>
      </Link>
    </View>
  );
}