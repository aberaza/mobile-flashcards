import { StyleSheet } from 'react-native'
import * as C from './colors'

export default StyleSheet.create({
    appContainer: {
      flex: 1,
      flexDirection : 'column',
      backgroundColor: C.LIGHT
    },
    appHeader:{
      backgroundColor : C.DARK,
      color : C.ORANGE
    },
//Decks List styling
    listContainer: {
      flex: 1,
      backgroundColor : C.NORMAL_LIGHT
    },
    deckItem: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: C.NORMAL_LIGHT
    },
    deckName: {
      marginTop:4,
      marginLeft:12,
      fontSize: 16,
      color: C.ORANGE,
      fontWeight: 'bold',
    },
    deckQuestionNb: {
      color: C.RED_LIGHT,
      fontWeight: 'normal',
      fontStyle: 'italic',
      marginLeft:12
    },
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: C.NORMAL_DARK,
    },
//
    textQuestion : {
      fontSize : 18,
      color : C.RED_LIGHT,
      fontWeight:'bold'
    },
    textAnswer : {
      fontSize : 18,
      color : C.RED_LIGHT,
      fontStyle: 'italic'
    },
    textStandard : {
      fontSize : 16,
      color : C.RED_LIGHT
    },
    standardInput : {
      color: C.RED_LIGHT,
      borderWidth : 0,
      fontSize : 16
    },
    /*from react-native-card-view*/
    cardContainer : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin:10,
      alignItems:'stretch',
    },
    card : {
      backgroundColor : C.NORMAL_LIGHT,
      borderRadius:2,
      shadowColor: C.BLACK,
      shadowOpacity:0.3,
      shadowRadius:1,
      shadowOffset:{
        height:1,
        width:0.3
      }
    },
    cardTitle : {
      flexDirection : 'row',
      backgroundColor : C.NORMAL
    },
    cardTitleText : {
      flex:1,
      fontSize:18,
      fontWeight: 'bold',
      paddingHorizontal : 16,
      paddingVertical: 10,
      color : C.RED_LIGHT
    },
    cardContent : {
      paddingHorizontal:16,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'stretch'
    },
    cardActions : {
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'stretch',
      backgroundColor:C.DARK
    },
    cardSeparator: {
      height:StyleSheet.hairlineWidth,
      backgroundColor: C.BLACK
    },
// MButton Styling
    buttonBasic : {
      borderRadius:0,
      paddingVertical:10,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText : {
      fontSize : 18,
      color : C.YELLOW
    },
    buttonGreen : {
      backgroundColor: C.GREEN
    },
    buttonRed : {
      backgroundColor:C.RED
    },
    buttonOrange : {
      backgroundColor:C.ORANGE
    }
  })