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
  // paddingHorizontal: spacing[4],
  // display: "flex",
  // justifyContent: "center",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const CARD_CONTAINER: ViewStyle = {
  paddingLeft: 35,
}

const HEADER: TextStyle = {
  paddingTop: spacing[3] * 2,
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 16,
  lineHeight: 20,
  textAlign: "center",
  letterSpacing: 1.5,
}

const ouraRingJsonData = JSON.parse(`{
  "summary_date": "2017-11-05",
  "period_id": 0,
  "is_longest": 1,
  "timezone": 120,
  "bedtime_start": "2017-11-06T01:13:19+02:00",
  "bedtime_end": "2017-11-06T07:16:19+02:00",
  "score": 79,
  "score_week": [97, 76, 78, 95, 74, 80, 79],
  "score_total": 57,
  "score_disturbances": 83,
  "score_efficiency": 99,
  "score_latency": 88,
  "score_rem": 97,
  "score_deep": 59,
  "score_alignment": 31,
  "total": 20310,
  "sleep_duration": [443, 534, 212, 422, 554, 324, 534],
  "awake_score": 96,
  "light": 10260,
  "rem": [123, 132, 102, 153, 244, 125, 143],
  "deep": [108, 99, 121, 134, 102, 112, 123],
  "onset_latency": 480,
  "restless": 39,
  "efficiency": 94,
  "midpoint_time": 11010,
  "hr_lowest": 46,
  "rest_hr_average_week": [45.375, 47.525, 47.450, 45.625, 44.750, 45.275, 46.225],
  "rmssd": 54,
  "breath_average": 13,
  "temperature_delta": -0.06,
  "stress": [32, 44, 13, 28, 35, 19, 37],
  "fatigue": "tired",
  "hypnogram_5min": "443432222211222333321112222222222111133333322221112233333333332232222334",
  "hr_5min": [0, 53, 51, 0, 50, 50, 49, 49, 50, 50, 51, 52, 52, 51, 53, 58, 60, 60, 59, 58, 58, 58, 58, 55, 55, 55, 55, 56, 56, 55, 53, 53, 53, 53, 53, 53, 57, 58, 60, 60, 59, 57, 59, 58, 56, 56, 56, 56, 55, 55, 56, 56, 57, 58, 55, 56, 57, 60, 58, 58, 59, 57, 54, 54, 53, 52, 52, 55, 53, 54, 56, 0],
  "rmssd_5min": [0, 0, 62, 0, 75, 52, 56, 56, 64, 57, 55, 78, 77, 83, 70, 35, 21, 25, 49, 44, 48, 48, 62, 69, 66, 64, 79, 59, 67, 66, 70, 63, 53, 57, 53, 57, 38, 26, 18, 24, 30, 35, 36, 46, 53, 59, 50, 50, 53, 53, 57, 52, 41, 37, 49, 47, 48, 35, 32, 34, 52, 57, 62, 57, 70, 81, 81, 65, 69, 72, 64, 0]
}`);

const bridgeJsonData = JSON.parse(`{
  "load": 6009,
  "sets": 41,
  "time": [70, 95, 130, 60, 50, 120, 120],
  "rest_heart_rate_avg_week": [44.725, 45.500, 45.625, 45.425, 45.775, 45.725, 45.875],
  "force": 69,
  "stress": "high",
  "difficulty_score": 67,
  "sleep": 80
}`);

const garminJsonData = JSON.parse(`{
  "summary_date": "2017-11-05",
  "sleep": 87,
  "calories": 2000,
  "rest_hr_average_week": [44.525, 46.225, 45.650, 45.625, 45.750, 45.750, 46.575],
  "stress": "mild",
  "body_composition": 70,
  "pulse": 57,
  "intensity_minutes": 23,
  "activity_details": 99,
  "body_battery": 88,
  "respiration": [97, 96, 88, 78, 89, 94, 79],
  "menstrual_cycle": 59,
  "steps_week": [7020, 5650, 10380, 10560, 9280, 4080, 5480],
  "hydration_cups": [5, 7, 6, 7, 7, 8, 6]
}`);

export const WelcomeScreen = observer(function TestScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll">
        <Header
            headerTx="welcomeScreen.title"
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
        <View style={CARD_CONTAINER}>
          <Card
            title="Sleep"
            score={ouraRingJsonData.score_week[6]}
            style={{marginTop: 5, marginBottom: 5}}
            imageBackground="galaxy"
            iconName="bed"
            onPress={() => {navigation.navigate("sleep")}}
          />
          <Card
            title="Exercise"
            score={bridgeJsonData.difficulty_score}
            style={{marginTop: 5, marginBottom: 5}}
            imageBackground="gym"
            iconName="weights"
            onPress={() => {navigation.navigate("exercise")}}
          />
          <Card
            title="Stress"
            score={ouraRingJsonData.stress[6]}
            style={{marginTop: 5, marginBottom: 5}}
            imageBackground="forest"
            iconName="stress"
            onPress={() => {navigation.navigate("stress")}}
          />
          <Card
            title="Heart Health"
            score={garminJsonData.respiration[6]}
            style={{marginTop: 5, marginBottom: 10}}
            imageBackground="food"
            iconName="heart"
            onPress={() => {navigation.navigate("heart")}}
          />
        </View>
      </Screen>
    </View>
    
  )
})

// import React from "react"
// import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { observer } from "mobx-react-lite"
// import { Button, Header, Screen, Text, Wallpaper } from "../../components"
// import { color, spacing, typography } from "../../theme"
// const bowserLogo = require("./bowser.png")

// const FULL: ViewStyle = { flex: 1 }
// const CONTAINER: ViewStyle = {
//   backgroundColor: color.transparent,
//   paddingHorizontal: spacing[4],
// }
// const TEXT: TextStyle = {
//   color: color.palette.white,
//   fontFamily: typography.primary,
// }
// const BOLD: TextStyle = { fontWeight: "bold" }
// const HEADER: TextStyle = {
//   paddingTop: spacing[3],
//   paddingBottom: spacing[4] + spacing[1],
//   paddingHorizontal: 0,
// }
// const HEADER_TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 12,
//   lineHeight: 15,
//   textAlign: "center",
//   letterSpacing: 1.5,
// }
// const TITLE_WRAPPER: TextStyle = {
//   ...TEXT,
//   textAlign: "center",
// }
// const TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 28,
//   lineHeight: 38,
//   textAlign: "center",
// }
// const ALMOST: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 26,
//   fontStyle: "italic",
// }
// const BOWSER: ImageStyle = {
//   alignSelf: "center",
//   marginVertical: spacing[5],
//   maxWidth: "100%",
// }
// const CONTENT: TextStyle = {
//   ...TEXT,
//   color: "#BAB6C8",
//   fontSize: 15,
//   lineHeight: 22,
//   marginBottom: spacing[5],
// }
// const CONTINUE: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
//   backgroundColor: "#5D2555",
// }
// const CONTINUE_TEXT: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 13,
//   letterSpacing: 2,
// }
// const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
// const FOOTER_CONTENT: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
// }

// export const WelcomeScreen = observer(function WelcomeScreen() {
//   const navigation = useNavigation()
//   const nextScreen = () => navigation.navigate("demo")

//   return (
//     <View style={FULL}>
//       <Wallpaper />
//       <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
//         <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
//         <Text style={TITLE_WRAPPER}>
//           <Text style={TITLE} text="Your new app, " />
//           <Text style={ALMOST} text="almost" />
//           <Text style={TITLE} text="!" />
//         </Text>
//         <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
//         <Image source={bowserLogo} style={BOWSER} />
//         <Text style={CONTENT}>
//           This probably isn't what your app is going to look like. Unless your designer handed you
//           this screen and, in that case, congrats! You're ready to ship.
//         </Text>
//         <Text style={CONTENT}>
//           For everyone else, this is where you'll see a live preview of your fully functioning app
//           using Ignite.
//         </Text>
//       </Screen>
//       <SafeAreaView style={FOOTER}>
//         <View style={FOOTER_CONTENT}>
//           <Button
//             style={CONTINUE}
//             textStyle={CONTINUE_TEXT}
//             tx="welcomeScreen.continue"
//             onPress={nextScreen}
//           />
//         </View>
//       </SafeAreaView>
//     </View>
//   )
// })
