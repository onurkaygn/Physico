import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 1.5,
    overflow: "hidden",
    paddingRight: 20,
    paddingLeft: 20,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
  },
  titleContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  infoText: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
  },
  buttonsContainer: {
    alignItems: "center",
    height: Dimensions.get("window").height / 4,
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#585d57",
    width: Dimensions.get("window").width / 1.4,
    height: Dimensions.get("window").height / 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  modalButton: {
    backgroundColor: "#585d57",
    width: Dimensions.get("window").width / 1.9,
    height: Dimensions.get("window").height / 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  logOutButton: {
    backgroundColor: "#585d57",
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 27,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2ba64c",
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 1.8,
    borderWidth: 1,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-between",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalImage: {
    width: Dimensions.get("window").height / 15,
    height: Dimensions.get("window").height / 15,
    borderRadius: 100,
  },
});
