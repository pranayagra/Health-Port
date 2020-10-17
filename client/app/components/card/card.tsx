import * as React from "react"
import { TextStyle, View, ViewStyle, ImageBackground } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  // more styles for the container here
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface CardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  const { style } = props
  
  const image = { uri: "https://reactjs.org/logo-og.png" }

  return (
    <View style={[CONTAINER, style]}>
      <ImageBackground source={image}
      <Text style={TEXT}>Hello</Text>
    </View>
  )
})
