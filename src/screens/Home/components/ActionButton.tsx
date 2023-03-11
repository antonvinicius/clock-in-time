import { Suitcase } from "phosphor-react-native";
import { TouchableOpacity, View, TouchableOpacityProps } from "react-native";

interface ActionButtonProps extends TouchableOpacityProps {
  icon: JSX.Element
  inactive: boolean
}

export function ActionButton({ icon, inactive, ...rest }: ActionButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={inactive}
      className="flex-row"
    >
      <View
        className={`p-4 rounded-lg bg-zinc-800 ${inactive ? 'opacity-50' : ''}`}
      >
        {icon}
      </View>
    </TouchableOpacity>
  )
}