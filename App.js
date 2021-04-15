import React, { Component } from 'react'
import { Picker, FlatList, Text, View } from 'react-native';
import Tabletop from 'tabletop';

export default class App extends Component {
  state = {
    data : [],
    selectedValue1: "",
    selectedValue2: "",
  };
  
  componentDidMount() {
    Tabletop.init({
      //key: '1c_b6jA-wJsEGmELpZN9mVo4wrBxVo5q18-u5Xo49n1w',
      key: '1JLFK9hiizH_IkT1taevof1SP1vDFPyIstvi7JBms0a8',
      callback: googleData => {
        this.setState({ 
          data :  googleData,     
        });
      },
      simpleSheet: true
    })
  }


  render() {
    return (
      <View>
      <Picker
      selectedValue={this.state.selectedValue1}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue, itemIndex) => this.setState({selectedValue1: itemValue})}
    >
      {this.state.data.map((item, index) => {
        return (< Picker.Item label={item.nome} value={item} key={index} />);
      })}   
    </Picker>

    <Text>Selecionado: {this.state.selectedValue1.nome} : {this.state.selectedValue1.valor}</Text>
        <Picker
        selectedValue={this.state.selectedValue2}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue2: itemValue})}
      >
        {this.state.data.map((item, index) => {
          return (< Picker.Item label={item.nome} value={item} key={index} />);
        })}   
      </Picker>

      <Text>Selecionado: {this.state.selectedValue2.nome} : {this.state.selectedValue2.valor}</Text>
      
      <Text>Soma: { ( parseFloat(this.state.selectedValue1.valor) + parseFloat(this.state.selectedValue2.valor) ) / 2 }</Text>
      {/* 
         <FlatList
        data={this.state.data} 
        keyExtractor={ i => `${i.nome}`}
        renderItem = { ({item: i}) => {
            return ( 
                <View>
                    <Text>{i.nome }</Text>
                </View>   
            ) 
        }} />     */}
      </View>
    );
  }
}