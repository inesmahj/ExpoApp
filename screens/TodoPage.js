import React from 'react';
import {Alert,Platform, StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from '../components/Header';
import InputBar from '../components/InputBar';
import TodoItem from '../components/TodoItem';

//The above is the code for The TodoPage that renders a view component containing a header, an InputBar, and a Flatlist, 
//Each component is handled thanks to one or multiple functions the thing that enables the user interaction and makes the Todo list a dynamic one.



export default class TodoPage extends React.Component {
  constructor(){
        super();
        //at everytime we launch the app we have to call the function get data to load all todos
        this.getData()
      }
      //the function used to get Todos fetched from dynamoDB
      getData=()=>{
        fetch("https://a08pckajub.execute-api.eu-central-1.amazonaws.com/default/getalltodos", {
          method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            todos:JSON.parse(data.body),
            todoInput:''            
          })
          console.log('Result WS : ',data)
        })
        this.state={
          todoInput:'' 
          
        }
      } 


      //Adding a new Todo Element to database and reloading the app
      //Still Presenting some problems
      addNewTodo () {   
        if (this.state.todoInput=='')
        {
          if (Platform.OS === 'web')
          {alert("Todo Item field is Empty!");}

          Alert.alert(
            'Alert',
            'Todo Item field is Empty!',
            [
              {text: 'OK', onPress: () => console.log('')},
            ],
            {cancelable: false},
          );
        }
        else{
        fetch("https://a08pckajub.execute-api.eu-central-1.amazonaws.com/default/addtodo", {
          method: 'post',
          body: JSON.stringify({'id': 21,'title': this.state.todoInput, 'done': false})
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          
        });
       
        
       this.getData();
       this.getData();
      }  
      
    }
      //Removing a done Item
      removeTodo(item) {
    
        if (item.done)
          {
              let todos=this.state.todos;
              fetch("https://a08pckajub.execute-api.eu-central-1.amazonaws.com/default/delete", {
              method: 'post',
              body: JSON.stringify({'id': item.id})
              }).then(function(response) {
              return response.json();
              }).then(function(data) {
              
              });    

              todos=todos.filter((todo) => todo.id != item.id);

              this.setState({todos}); 
          }
        else {
          if (Platform.OS === 'web')
          {alert("Task not done yet!");}

          Alert.alert(
            'Alert',
            'This task is not done yet!',
            [
              {text: 'OK', onPress: () => console.log('')},
            ],
            {cancelable: false},
          );
        }  
        }  
      //Changing the state of the Item 
      toggleDone(item) {
        let todos=this.state.todos;
        todos=todos.map((todo) => {
          if (todo.id==item.id) {
            todo.done=!todo.done;
            fetch("https://a08pckajub.execute-api.eu-central-1.amazonaws.com/default/update", {
              method: 'post',
              body: JSON.stringify({'id': todo.id, 'done':todo.done})
              }).then(function(response) {
              return response.json();
              }).then(function(data) {
             
              });    
          }
          return todo
        })
        this.setState({todos});
      }
       //What we see on the screen 
      render() {
        const statusbar=(Platform.OS=='android')? <View style={styles.statusbar}></View> : <View></View>
        return (
          <View style={styles.container}>
            {statusbar}
            <Header title="Todoapp"/>
            <InputBar    
            //setting up properties for an input bar         
            addNewTodo={ () => this.addNewTodo() } 
            textChange={ todoInput => this.setState({ todoInput }) }
            todoInput={this.state.todoInput}
            />
            <FlatList 
              //initializing data to todos list 
              data={this.state.todos}  
              extraData={this.state}
              keyExtractor={(item,index) => index.toString()}
              //initializing Items
              renderItem={ ({item,index}) => {
                      return (
                        //returning the todoItem component as an Item for the flatlist for each TODO 
                        //and defining properties which are todoItem, toggleDone function and removeTodo 
                        <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)}/>
                      )            
              }}
            />          
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
    
      },
      statusbar: {
        backgroundColor: '#FFCE00',
        height: 20
      },
      header: {
        color: "#171717"
      }
    }); 