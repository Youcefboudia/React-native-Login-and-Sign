import { StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },

  header:{
    marginVertical:36,
  },
  headerImg:{
    width:120,
    height:120,
    alignSelf:'center',
    marginBottom:10,
  },

  title:{
    fontSize:24,
    fontWeight:'700',
    color:'#1e1e1e',
    marginBottom:6,
    textAlign:'center'
  },

  subTitle:{
    fontSize:12,
    fontWeight:'500',
    color:'#929292',
    marginBottom:6,
    marginTop:6,
    textAlign:'center'
  },

  shadowBox: {
    width: '100%',
    padding: 10,
    paddingTop:30,
    paddingBottom:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 50,
  },
  form:{
    shadowRadius:30
  }
  ,
  input:{
    padding:10
  },

  inputLabel:{
    fontSize:12,
    fontWeight:'500',
    color:"#434343",
    marginLeft:5
  },
  inputControl:{
    paddingVertical:15,
    paddingHorizontal:10,
    marginTop:10,
    marginBottom:5,
    color:'#434343',
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: 'gray',
    fontSize:12
  },

  formAction:{},
  btn:{
    backgroundColor:"#364F66",
    borderRadius:30,
    marginBottom:6,
    marginTop:6,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
  },
  textBtn:{
    fontSize:12,
    fontWeight:'500',
    color:"#f2f2f2",
    textAlign:'center'
  },
  bottomTitle:{
    fontSize:12,
    fontWeight:'500',
    color:'#929292',
    marginBottom:6,
    marginTop:6,
    textAlign:'center'
  },
  btnLink:{
    textDecorationLine:'underline'
  }
  ,
  cpRight:{
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    marginVertical: 5,
  }
});

export default styles;