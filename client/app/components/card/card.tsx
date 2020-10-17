import * as React from "react"
import { TextStyle, View, ViewStyle, ImageBackground, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { Icon } from "../icon/icon"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import SegmentedRoundDisplay from 'react-native-segmented-round-display';

const CONTAINER: ViewStyle = {
  // borderColor: 'red',
  // borderWidth: 2,
  width: '90%',
  height: 200,
  justifyContent: "center",
  display: "flex",
  // shadowOffset:{  width: 10,  height: 10,  },
  // shadowColor: 'blue',
  // shadowOpacity: 1.0,
  // shadowRadius: 10
}

const IMGBKG: ImageStyle = {
  resizeMode: "stretch",
  width: '100%',
  height: '100%',
  // paddingTop: 50,
  display: 'flex',
  justifyContent: 'center',
}

const SCORE_CONTAINER: ViewStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 18,
  color: color.primary,
  textAlign: "center",
}

export interface CardProps {
  title: string,
  score: number,
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle,
  suggestion?: string,
  imageBackground: string
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  const { title, score, style, suggestion, imageBackground } = props

  const arcProps = {
    // displayValue: true,
    // formatValue: (value) => `R$ ${value.toFixed(2)}`,
    segments: [
      {
        total: 100,
        filled: score,
      },
    ],
    totalArcSize: 210,
    radius: 75,
    // style: {
    //   width: "100%",
    // }
  }

  return (
    <View style={[CONTAINER, style]}>
      <ImageBackground 
      source={require(`../../../assets/desert.png`)} 
      style={IMGBKG}
      imageStyle={{ borderRadius: 15 }}>
        <Text style={[TEXT, {marginBottom: 20, fontSize: 20}]}>{title}</Text>
        <View style={SCORE_CONTAINER}>
          <View style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
            <Icon icon="bullet"/>
          </View>
          <Text style={[TEXT, {marginBottom: 20, fontSize: 50}]}>{score}</Text>
          {/* <SegmentedRoundDisplay {...arcProps}/> */}
        </View>
        
        {/* <Text style={[TEXT, {marginBottom: 20, fontSize: 14}]}>{suggestion}</Text> */}
      </ImageBackground>
    </View>
  )
})
