import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface StatCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string,
  value: string,
}

/**
 * Describe your component here
 */
export const StatCard = observer(function StatCard(props: StatCardProps) {
  const { style, title, value } = props

  return (
    <View style={[CONTAINER, style]}>
      <Text style={[TEXT, {}]}>{title}</Text>
      <Text style={[TEXT, {fontSize: 24}]}>{value}</Text>
    </View>
  )
})
