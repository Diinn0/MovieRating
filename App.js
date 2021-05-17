import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TextInput, View, Button, FlatList} from 'react-native';
import FilmView from "./components/FilmView";
import AddFilm from "./components/AddFilm";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding:5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: 'black',
    minWidth:250,
    marginTop:10,
    marginHorizontal:5,
    borderRadius: 5,
    borderWidth: 1
  }
});

export default class App extends React.Component {

  state = {
    name: '',
    phone: '',
    isValid: false,

    status: 0,
    films: []
  }


  handleName = name => {
    if (name.length < 50)
      this.setState({name}, this.validateForm)
  }

  handlePhone = phone => {
    if (+phone >= 0 && phone.length <= 10)
      this.setState({phone}, this.validateForm)
    console.warn("NAaaaaaaa")
  }

  validateForm = () => {
    if (this.state.phone.length == 10 && this.state.name.length > 5)
      this.setState({isValid: true})
    else {
      this.setState({isValid: false})
    }
  }

  handleSave = () => {
  }

  addFilm = film => {
    //this.setState({films: film.push(film)});
    console.log(film);
    let test = this.state.films.push(film);
    console.log(test);
    console.log(this.state.films)
  }

  render() {
    return (
        <NavigationContainer>
          <Tabs.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  switch (route.name) {
                    case "Add":
                      iconName = focused ? "add" : "add";
                      break;
                    case "Films":
                      iconName = focused ? "film" : "film-outline";
                      break;
                    default:
                      iconName = "ban";
                      break;
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
          >
            <Tabs.Screen name="Films">
              {(props) =>
                  <FlatList renderItem={(obj) => <FilmView props={this.state.films[obj.index]}/>} data={this.state.films}/>}
            </Tabs.Screen>
            <Tabs.Screen name="NewMovie">
              {(props) => <AddFilm addFilm={this.addFilm}></AddFilm>}
            </Tabs.Screen>
          </Tabs.Navigator>
        </NavigationContainer>
    );
  }
}