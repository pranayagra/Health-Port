import * as React from "react"
import { TextStyle, View, ViewStyle, ImageBackground, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { Icon } from "../icon/icon"
import { TouchableOpacity } from "react-native-gesture-handler"
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
  // height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const ICON: ImageStyle = {
  maxHeight: 64,
  maxWidth: 64,
  marginRight: '25%',
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
  imageBackground: string,
  iconName?: string,
  onPress?: () => any,
}

// doing this stupid thing because the require method
// doesn't work with formatted strings ughaksjfgnlsaknsdng
function cardBackground(name) {
  if (name === "galaxy") {
    return require('../../../assets/galaxy.png')
  } else if (name === "gym") {
    return require('../../../assets/gym.png')
  } else if (name === "forest") {
    return require('../../../assets/forest.png')
  } else if (name === "food") {
    return require('../../../assets/food.png')
  } else {
    return require('../../../assets/desert.png')
  }
}

// same thing here ughaosdlsakdjgn
function generateIcon(iconName) {
  if (iconName === "bed") {
    return require("../icon/icons/bed.png")
  } else if (iconName === "heart") {
    return require("../icon/icons/heart.png")
  } else if (iconName === "stress") {
    return require("../icon/icons/stress.png")
  } else if (iconName === "weights") {
    return require("../icon/icons/weights.png")
  } else {
    return require("../icon/icons/arrow-left.png")
  }
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  const { title, score, style, imageBackground, iconName, onPress } = props


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
    <TouchableOpacity onPress={onPress}>
      <View style={[CONTAINER, style]}>
        <ImageBackground 
        source={cardBackground(imageBackground)} 
        style={IMGBKG}
        imageStyle={{ borderRadius: 15 }}>
          <Text style={[TEXT, {marginBottom: 20, fontSize: 24}]}>{title}</Text>
          <View style={SCORE_CONTAINER}>
            <View style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
              <Image source={generateIcon(iconName)} style={ICON}/>
            </View>
            <Text style={[TEXT, {marginBottom: 20, fontSize: 50}]}>{score}</Text>
            {/* <SegmentedRoundDisplay {...arcProps}/> */}
          </View>
          
          {/* <Text style={[TEXT, {marginBottom: 20, fontSize: 14}]}>{suggestion}</Text> */}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
})
