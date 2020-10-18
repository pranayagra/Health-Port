import React from "react"
import { observer } from "mobx-react-lite"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, FlatList, Dimensions} from "react-native"
import { Screen, Text, Header, Wallpaper, BulletItem} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import {LineChart} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

var today = new Date();
var todayDay = today.getDate();
var todayMonth = "/" + (today.getMonth()+1);

var isDailyView = false;

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
  "sleep_duration": 443,
  "awake_score": 96,
  "light": 10260,
  "rem": 123,
  "deep": 108,
  "onset_latency": 480,
  "restless": 39,
  "efficiency": 94,
  "midpoint_time": 11010,
  "hr_lowest": [41.23, 40.34, 50.45, 56.34, 40.75, 40.00, 43.56],
  "rest_hr_average_week": [45.375, 47.525, 47.450, 45.625, 44.750, 45.275, 46.225],
  "rmssd": 54,
  "breath_average": 13,
  "temperature_delta": -0.06,
  "stress": "average",
  "fatigue": "tired",
  "hypnogram_5min": "443432222211222333321112222222222111133333322221112233333333332232222334",
  "hr_5min": [0, 53, 51, 0, 50, 50, 49, 49, 50, 50, 51, 52, 52, 51, 53, 58, 60, 60, 59, 58, 58, 58, 58, 55, 55, 55, 55, 56, 56, 55, 53, 53, 53, 53, 53, 53, 57, 58, 60, 60, 59, 57, 59, 58, 56, 56, 56, 56, 55, 55, 56, 56, 57, 58, 55, 56, 57, 60, 58, 58, 59, 57, 54, 54, 53, 52, 52, 55, 53, 54, 56, 0],
  "rmssd_5min": [0, 0, 62, 0, 75, 52, 56, 56, 64, 57, 55, 78, 77, 83, 70, 35, 21, 25, 49, 44, 48, 48, 62, 69, 66, 64, 79, 59, 67, 66, 70, 63, 53, 57, 53, 57, 38, 26, 18, 24, 30, 35, 36, 46, 53, 59, 50, 50, 53, 53, 57, 52, 41, 37, 49, 47, 48, 35, 32, 34, 52, 57, 62, 57, 70, 81, 81, 65, 69, 72, 64, 0]
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
  "respiration": [97, 102, 88, 78, 121, 101, 110],
  "menstrual_cycle": 59,
  "steps_week": [7020, 5650, 10380, 10560, 9280, 4080, 5480],
  "hydration_cups": [5, 7, 6, 7, 7, 8, 6]
}`);

const bridgeJsonData = JSON.parse(`{
  "load": 6009,
  "sets": 41,
  "time": 70,
  "rest_heart_rate_avg_week": [44.725, 45.500, 45.625, 45.425, 45.775, 45.725, 45.875],
  "force": 69,
  "stress": "high",
  "difficulty_score": 67,
  "sleep": 80
}`);

const whoopJsonData = JSON.parse(`{
  "updatedAt": "2017-11-05",
  "sleepScore": 97,
  "recovery": 65,
  "rest_heartRate_week": [44.7, 45.5, 45.7, 45.4, 45.7, 45.5, 45.9],
  "naps": 1,
  "qualityDuration": 76,
  "sleep_consistency_score": 84,
  "maxHeartRate": [112.750, 102.43, 154.34, 131.23, 122.45, 132.67, 102.54],
  "stress": "very low",
  "averageHeartRate": [88, 67, 76, 78, 67, 87, 88],
  "pain": 2
}`);

const heartWeekScoreData_averageHeartRate = {
  labels: [(todayDay-6) + todayMonth, (todayDay-5) + todayMonth, (todayDay-4) + todayMonth, (todayDay-3) + todayMonth, (todayDay-2) + todayMonth, (todayDay-1) + todayMonth, todayDay + todayMonth],
  datasets: [
    {
      data: whoopJsonData.averageHeartRate
    }
  ]
}

const heartWeekScoreData_respiration = {
  labels: [(todayDay-6) + todayMonth, (todayDay-5) + todayMonth, (todayDay-4) + todayMonth, (todayDay-3) + todayMonth, (todayDay-2) + todayMonth, (todayDay-1) + todayMonth, todayDay + todayMonth],
  datasets: [
    {
      data: garminJsonData.respiration
    }
  ]
}

const heartWeekScoreData_hr_lowest = {
  labels: [(todayDay-6) + todayMonth, (todayDay-5) + todayMonth, (todayDay-4) + todayMonth, (todayDay-3) + todayMonth, (todayDay-2) + todayMonth, (todayDay-1) + todayMonth, todayDay + todayMonth],
  datasets: [
    {
      data: ouraRingJsonData.hr_lowest
    }
  ]
}

const heartWeekScoreData_hr_max = {
  labels: [(todayDay-6) + todayMonth, (todayDay-5) + todayMonth, (todayDay-4) + todayMonth, (todayDay-3) + todayMonth, (todayDay-2) + todayMonth, (todayDay-1) + todayMonth, todayDay + todayMonth],
  datasets: [
    {
      data: whoopJsonData.maxHeartRate
    }
  ]
}

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

const heartData = [
  {
    id: 'HR Minimum',
    title: ouraRingJsonData.hr_lowest[6],
  },
  {
    id: 'HR Maximum',
    title: whoopJsonData.maxHeartRate[6],
  },
  {
    id: 'HR Average',
    title: whoopJsonData.averageHeartRate[6],
  },
  {
    id: 'HR Resting',
    title: garminJsonData.rest_hr_average_week[6],
  },
  {
    id: 'Respiration Score',
    title: garminJsonData.respiration[6],
  },
  {
    id: 'Breath Average',
    title: ouraRingJsonData.breath_average,
  }
];

export const HeartScreen = observer(function HeartScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  if (isDailyView) {
  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
      <FlatList
        data={[
          {
            key: heartData[0].id + ':\t' + heartData[0].title
          },
          {
            key: heartData[1].id + ':\t' + heartData[1].title
          },
          {
            key: heartData[2].id + ':\t' + heartData[2].title
          },
          {
            key: heartData[3].id + ':\t' + heartData[3].title
          },
          {
            key: heartData[4].id + ':\t' + heartData[4].title
          },
          {
            key: heartData[5].id + ':\t' + heartData[5].title
          }
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      </Screen>
    </View>
    
  )
  } else {
    return (
    
      <View style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerTx="demoScreen.howTo"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
  
      <View>
      <Text>HR Average</Text>
      <LineChart
        data={heartWeekScoreData_averageHeartRate}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        fromZero
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      </View>
      
      <View>
      <Text>HR Minimum</Text>
      <LineChart
        data={heartWeekScoreData_hr_lowest}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        fromZero
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      </View>

      <View>
      <Text>HR Maximum</Text>
      <LineChart
        data={heartWeekScoreData_hr_max}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        fromZero
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      </View>

      <View>
      <Text>Respiration Score</Text>
      <LineChart
        data={heartWeekScoreData_respiration}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        fromZero
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      </View>
  
    </Screen>
    </View>
    )
  }
})
