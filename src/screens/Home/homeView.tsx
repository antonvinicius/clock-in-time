
import { Button, Text, View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";

export function Home() {
  const viewModel = useHomeViewModel()

  return (
    <View className="flex-1 py-10 flex-col px-5 bg-gray-200">

      <View>
        <Text>Tempo de saída: {viewModel.exitTime}</Text>
      </View>

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
    </View>
  );
}
