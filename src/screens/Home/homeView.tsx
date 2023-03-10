
import { View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";

export function Home() {
  const { } = useHomeViewModel()

  return (
    <View className="flex-1 py-10 flex-col px-5 bg-gray-200">
    </View>
  );
}
