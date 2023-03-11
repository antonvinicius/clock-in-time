
import { Button, Text, View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";

export function Home() {
  const viewModel = useHomeViewModel()

  return (
    <View className="flex-1 bg-zinc-700">

      <View className="w-full bg-zinc-800 pt-10 pb-3 border-b-2 border-b-gray-700">
        <Text className="text-center text-lg text-white">Sexta-feira, 10 de Março</Text>
      </View>

      <View className="justify-around flex-1">
        <View className="mt-5">
          <Button
            disabled={viewModel.initialDisabled}
            onPress={viewModel.handleSaveCurrentTime}
            title="Pegar minuto inicial"
          />

          <Button
            disabled={viewModel.pauseDisabled}
            onPress={viewModel.handleStartBreak}
            title="Pausar"
          />

          <Button
            disabled={viewModel.backPauseDisabled}
            onPress={viewModel.handleStopBreak}
            title="Voltar da pausa"
          />

          <Button
            disabled={viewModel.lunchDisabled}
            onPress={viewModel.handleStartLunch}
            title="Almoço"
          />

          <Button
            disabled={viewModel.backLunchDisabled}
            onPress={viewModel.handleStopLunch}
            title="Volta"
          />
        </View>

        <View className="items-center">
          <Text className="text-center text-zinc-200">Sua hora de saída será</Text>
          <Text className="mt-3 text-center text-7xl text-white">{viewModel.exitTime}</Text>
        </View>
      </View>
    </View>
  );
}
