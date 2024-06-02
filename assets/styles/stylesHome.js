import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1, backgroundColor: '#e8ecf4'
    },
    topHead:{
      backgroundColor:'#1d3557',
      paddingHorizontal:10
    },
    appHead:{
      marginTop:20,
    flexDirection:"row",
    alignContent:'center',
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
    padding:10,
    },
    appName:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#f2f2f2',
      borderRadius:50,
      padding:5
    },
    textHead:{
      marginHorizontal:15,
      fontSize:12,
      fontWeight:"600",
      padding:5,
      color:"gray"
    },

    imgHead: {
      width:30,
      height:30,
    },

  container: {
    flex:1,
    padding: 12,
  },

  header: {
    width:'100%',
    alignItems:'center',
    justifyContent:"center",
    flexDirection:'row',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding:5,
    elevation: 50,
    borderRadius:15,
    marginBottom:20,
    backgroundColor:"#f2f2f2",
    elevation: 50,
    
  },
  
  searchBtn: {
    width:40,
    height:40,
    padding:10,
    width:'10%',
    alignItems:'center',
    justifyContent:"center"
  },
  searchImg: {
    width:30,
    height:30,
    padding:10,
    marginHorizontal:10
  },

  inputSearch: {
    margin:5,
    paddingHorizontal:5,
    width:'80%',
    borderWidth: 0,
    borderColor: 'gray',
    fontSize:12
  },


  titleContent:{
    fontSize:24,
    fontWeight:"400",
    alignSelf:'center',
    marginTop:10,
    marginBottom:20,
    color:"#000",
  },
  cntContent:{
    flex:1,
    backgroundColor:"#fff",
    flexDirection:"column",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding:10,
    elevation: 50,
    borderRadius:7,
    marginBottom:20,

  },
  textElemnt:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  textLocation:{
      fontSize:12,
      color:"#929292",
      fontWeight:"500",
  }
})

export default styles;