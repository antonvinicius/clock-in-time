
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";
import { ClockClockwise, ClockCounterClockwise, ForkKnife, Pause, PersonSimpleWalk, Play, Stop, StopCircle, Suitcase } from "phosphor-react-native";
import { ActionButton } from "./components/ActionButton";
import dayjs from "dayjs";
import { capitalize } from "../../util/capitalize";

export function Home() {
  const viewModel = useHomeViewModel()

  return (
    <View className="flex-1 bg-zinc-700">
      <View className="w-full bg-zinc-800 pt-10 pb-3 border-b-2 border-b-zinc-400">
        <Text className="text-center text-lg text-white">{capitalize(dayjs().format('dddd'))}, {dayjs().format('ll')}</Text>
      </View>

      <View className="justify-around flex-1">
        <View className="justify-center items-center flex-1">
          <View className="flex-row mb-5 gap-5">
            <ActionButton
              icon={<Suitcase size={32} color="#FFF" />}
              onPress={viewModel.handleSaveCurrentTime}
              inactive={viewModel.initialDisabled}
            />

            <ActionButton
              icon={<ClockClockwise size={32} color="#FFFFFF" />}
              onPress={viewModel.handleStartBreak}
              inactive={viewModel.pauseDisabled}
            />

            <ActionButton
              icon={<ClockCounterClockwise size={32} color="#FFFFFF" />}
              onPress={viewModel.handleStopBreak}
              inactive={viewModel.backPauseDisabled}
            />
          </View>
          <View className="flex-row gap-5">
            <ActionButton
              icon={<ForkKnife size={32} color="#FFFFFF" />}
              onPress={viewModel.handleStartLunch}
              inactive={viewModel.lunchDisabled}
            />

            <ActionButton
              icon={<PersonSimpleWalk size={32} color="#FFFFFF" />}
              onPress={viewModel.handleStopLunch}
              inactive={viewModel.backLunchDisabled}
            />

            <ActionButton
              icon={<Stop size={32} color="#FFFFFF" />}
              inactive
            />
          </View>
        </View>

        <View className="items-center mb-20">
          <Text className="text-center text-zinc-200">Sua hora de saída será</Text>
          <Text className="mt-3 text-center text-7xl text-white">{viewModel.exitTime}</Text>
        </View>
      </View>
    </View>
  );
}
