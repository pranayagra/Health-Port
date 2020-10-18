import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import { Screen, Text, Header, Card } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.black,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const TestScreen = observer(function TestScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll">
        <Header
            headerTx="demoScreen.howTo"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
        <Card
          title="Sleep"
          score={100}
          style={{marginTop: 5, marginBottom: 5}}
          imageBackground="galaxy"
          iconName="bed"
          onPress={() => {navigation.navigate("demo")}}
        />
        <Card
          title="Exercise"
          score={80}
          style={{marginTop: 5, marginBottom: 5}}
          imageBackground="gym"
          iconName="weights"
        />
        <Card
          title="Stress"
          score={80}
          style={{marginTop: 5, marginBottom: 5}}
          imageBackground="forest"
          iconName="stress"
        />
        <Card
          title="Heart Health"
          score={100}
          style={{marginTop: 5, marginBottom: 10}}
          imageBackground="food"
          iconName="heart"
        />
      </Screen>
    </View>
    
  )
})
