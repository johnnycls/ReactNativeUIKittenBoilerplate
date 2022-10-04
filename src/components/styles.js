import { CheckBox } from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  // Logos
  logoView: {
    width: vw,
    height: 0.3 * vh,
    display: "flex",
    alignItems: "center",
    padding: "15%",
    marginTop: "5%",
  },
  logo: { width: "100%", height: "80%", resizeMode: "contain" },
  logoText: { color: "white", height: "20%" },

  // Headers
  hearderView: {
    width: vw,
    height: 0.12*vh,
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    paddingTop: 0.05*vh
  },
  hearderText: {
    fontWeight: "bold", 
    color: "white", 
    fontSize: "26", 
  },

  bottomBox:{
    width: vw,
    height: 0.15*vh,
    padding: "5%",
    marginBottom: 0.1*vh,
  },

  // FormViews
  loginFormView: {
    width: vw,
    height: 0.5 * vh,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
    paddingBottom: "15%",
  },
  registerFormView: {
    width: vw,
    height: 0.5 * vh,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
    paddingBottom: "15%",
  },

  scrollView:{
    height: 0.6 * vh,
    display: "flex",
    padding: "5%",
    margin: "5%",
    backgroundColor: "gray",
    border: "gray",
    borderRadius: "0",
  },

  // Inputs
  inputView: { width: "100%" },
  input1: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 0,
    borderBottomWidth: 0,
  },
  input2: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 0,
  },

  // Buttons & CheckBox
  button1: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "transparent",
    borderRadius: 10,
  },
  button2: {
    width: "100%",
    borderColor: "white",
    borderRadius: 10,
  },
  button3: {
    width: "100%",
    backgroundColor: "#63A4EF",
    borderColor: "transparent",
    borderRadius: 10,
  },
  checkBox: {
    padding: "10%", 
    borderColor: "white"},

  // Links & Texts
  whiteLink: {color: "white", fontSize: "12", textDecorationLine: "underline"},
  blueLink: {color: "#045DE9", fontSize: "12", textDecorationLine: "underline"},
  whiteText: { color: "white" },
  smallWhiteText: {color: "white", fontSize: "12"},
  smallBlackText: {color: "black", fontSize: "12"},
  blueText: { color: "#63A4EF" },



});
