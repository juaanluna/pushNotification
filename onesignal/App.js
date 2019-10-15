import React from 'react'
import { View, Text } from 'react-native'
import OneSignal from 'react-native-onesignal'

class App extends React.Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("fb2343b2-2dbd-4d5f-add1-2e1a39b0ea7f");

    //Carregar dados do usuário
    /*
      CÓDIGO PARA CARGA DOS DADOS NECESSÁRIOS PARA INTEGRAÇÃO ONESIGNAL DA BASE DE DADOS...

      Nome e Email
    */

    //cria eventos listener para CRIAR, ABRIR, RECEBER INFOS DO DISPOSITIVO
    // console.log(this.props.auth.email)

    OneSignal.sendTags({name: 'juan',email: 'juaanluna@gmail.com' })
     
      
    // OneSignal.setEmail('juaanluna@gmail.com')
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  //remove o listener(ex: fechar tela) 
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }
  //Quando clica na notificação
  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <View>
        <Text>AAAAAAAAAAAAA</Text>
      </View>
    )
  }
}
export default App