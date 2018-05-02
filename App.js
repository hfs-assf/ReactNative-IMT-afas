import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Form, Item, Input, Label,  } from 'native-base';
import {Button, Text, View} from 'react-native'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      massa: '0',
      tinggi: '0',
      hasil: 'null',
      imt:'null'

    };
  }
  
  handleSubmit = () => {
    const { massa, tinggi } = this.state;
  
    this.setState({
      hasil: (massa * 10000) / Math.pow((tinggi),2)
    });
  }
  render() {
    var imt;
    switch(true){
      case(this.state.hasil<18.5):
        imt = 'Berat badan anda kurang';
          break;
      case(this.state.hasil>=18.5 && this.state.hasil<=24.9):
          imt = 'Berat badan ideal';
          break;
      case(this.state.hasil>=25.0 && this.state.hasil<=29.9):
          imt = 'Berat badan berlebih';
          break;
      case(this.state.hasil>=30.0 && this.state.hasil<=39.9):
          imt = 'Berat badan sangat berlebih'
          break;
      case(this.state.hasil>=39.9):
          imt = 'Obesitas'
          break;
    }

    let wrapperContent = {
      padding: 10, 
      alignItems: 'center'
    }
    
    let contentColor = {
      color: 'black'
    }
    
    let content = {
      fontSize: 20,
      fontWeight: 'bold'
    }
    
    let marginAuto = {
      marginRight: 'auto', 
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
    }
    
    return (
      <Container>
        <Header>
          <Body>
            <Title>Index Massa Tubuh</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Massa(kg)</Label>
              <Input 
                onChangeText={(massa) => this.setState({massa})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Tinggi (cm)</Label>
              <Input 
                onChangeText={(tinggi) => this.setState({tinggi})}
              />
            </Item>
          </Form>
          <Button title={"Hitung IMT"} onPress={this.handleSubmit} />
          
        
            <View style={ wrapperContent }>            
              <Text style={ contentColor }>Massa Tubuh:</Text>
              <Text style={{ ...contentColor, ...content }}>{ this.state.massa } kg</Text>
            </View>

            <View style={ wrapperContent }>            
              <Text style={ contentColor }>Tinggi Badan:</Text>
              <Text style={{ ...contentColor, ...content }}>{ this.state.tinggi } cm</Text>
            </View>

            <View style={ wrapperContent }>            
              <Text style={ contentColor }>IMT:</Text>
              <Text style={{ ...contentColor, ...content }}>{ this.state.hasil } </Text>
            </View>

            <View style={ wrapperContent }>            
              <Text style={ contentColor }>Diagnosa:</Text>
              <Text style={{ ...contentColor, ...content }}>{ imt }</Text>
            </View>
        </Content>
      </Container>
    );
  }
}

