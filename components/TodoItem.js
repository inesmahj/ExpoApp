import React from 'react';
import {Switch,StyleSheet, Text, Button,Platform, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//Todo Item is the component that we inject into our list of todos for each created task,
//In the TodopageScreen file this todoItem is going to be injected into a flatlist element.
//As you see in the code, A todoItem returns a touchableOpacity element containing a text to show the task name, a button to remove an Item if it is done, and a checkbox or a switch depending on the type of the platform we are using enabling users to change the state of a task from done to not done or the oposite.

export default class TodoItem extends React.Component {
  constructor (props) {
      super(props);
  }

  render () {
     
     const todoItem = this.props.todoItem;
     const statusbar=(Platform.OS=='android')?<CheckBox value={todoItem.done} onChange={() => this.props.toggleDone()}></CheckBox>: <Switch value={todoItem.done} onValueChange={() => this.props.toggleDone()}></Switch>
     return(
            <TouchableOpacity
             style={styles.todoItem}
             onPress={() => this.props.toggleDone()}>
               {statusbar}
               <Text style={(todoItem.done)? { color : '#AAAAAA'} : { color: '#313131'}}>
                  { todoItem.title }
               </Text>
               <Button
                 title="Remove"
                 color={(todoItem.done)? 'rgba(200,0,0,0.5)': 'rgba(255,0,0,1)' }
                 onPress={() => this.props.removeTodo()}
               />
            </TouchableOpacity>
     )
  }


}
const styles=StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15

  }

})