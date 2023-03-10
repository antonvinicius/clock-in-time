
import { Button, View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";

export function Home() {
  const viewModel = useHomeViewModel()

  return (
    <View className="flex-1 justify-between py-10 flex-col px-5 bg-gray-200">
      <Button
        onPress={viewModel.handleSaveCurrentTime}
        title="Pegar minuto inicial"
      />

      <Button
        onPress={viewModel.handleStartBreak}
        title="Pausar"
      />

      <Button
        onPress={viewModel.handleStopBreak}
        title="Voltar da pausa"
      />

      <Button
        onPress={viewModel.handleStartLunch}
        title="Almoço"
      />

      <Button
        onPress={viewModel.handleStopLunch}
        title="Volta"
      />
    </View>
  );
}
