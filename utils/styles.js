import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    appContainer: {
      flex: 1,
      flexDirection : 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    listContainer: {
      flex: 1,
      backgroundColor : '#cfcfcf'
    },
    deckItem: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f26f28'
    },
    deckName: {
      marginTop:4,
      marginLeft:12,
      fontSize: 16,
      color: '#0ff',
      fontWeight: 'bold',
    },
    deckQuestionNb: {
      color: '#0ff',
      fontWeight: 'normal',
      fontStyle: 'italic',
      marginLeft:12
    },
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
    searchInput : {
      height: 40,
      flex:1,
      paddingHorizontal:12,
      fontSize:16,
      backgroundColor: '#ffffff',
      color: "#000000",
      borderRadius:3
    }
  
  });