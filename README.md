# pushNotification
Esta documentação tem como objetivo a explicação de como criar e manipular push notification:

Nesta documentação você encontrará informações sobre:

**1. integrar OneSignal**

**2. Adicionar icone na notificação(Adicional)**



##  1. integrar OneSignal


**1.1 Instalação**

     npm install --save react-native-onesignal


**1.2 Link OneSignal**
        
    react-native link react-native-onesignal


**1.3 Instruções específicas para Android**
   
   **Caminho:**
            Android>app>src>main>AndroidManifest.xml

No seu arquivo AndroidManifest.xml, adicione  android: launchMode="singleTop"
como um atributo à sua atividade principal.

    <application ....>
      <activity
        android:name=".MainActivity"
        android:label="OneSignal Example"
        android:launchMode="singleTop"> <!-- Add this attribute to your main activity -->
      </activity>
        .....



**1.4 Adicionando o plug-in Gradle**

  **Caminho:**
            Android>app>build.gradle

**1.4.1** Na parte superior do seu projeto Android app/build.gradle,
 adicione o seguinte código na parte superior do arquivo:

    buildscript {
        repositories {
            maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
        }
        dependencies {
            classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.1, 0.99.99]'
        }
    }



**1.4.2** Dentro do seu Android>app>build.gradle, verifique se seu compileSdkVersione
 e buildToolsVersion possuem a versão 26 da API ou superior
 
      android {
          compileSdkVersion 27
          buildToolsVersion '27.0.3'
          // ...
      }
      
  **1.5 Inicializando**
  
  Na raiz do projeto crie seu App.js:
  
     import React, { Component } from 'react';
     import OneSignal from 'react-native-onesignal'; // Import package from node modules

     export default class App extends Component {

     constructor(properties) {
         super(properties);
         OneSignal.init("YOUR_ONESIGNAL_APPID"); //ESSE COMANDO IRÁ INICIAR

         OneSignal.addEventListener('received', this.onReceived);
         OneSignal.addEventListener('opened', this.onOpened);
         OneSignal.addEventListener('ids', this.onIds);
       }

       componentWillUnmount() {
         OneSignal.removeEventListener('received', this.onReceived);
         OneSignal.removeEventListener('opened', this.onOpened);
         OneSignal.removeEventListener('ids', this.onIds);
       }

       onReceived(notification) {
         console.log("Notification received: ", notification);
       }

       onOpened(openResult) {
         console.log('Message: ', openResult.notification.payload.body);
         console.log('Data: ', openResult.notification.payload.additionalData);
         console.log('isActive: ', openResult.notification.isAppInFocus);
         console.log('openResult: ', openResult);
       }

       onIds(device) {
         console.log('Device info: ', device);
       }
     }

Após estes passos, apenas faltará configurar no OneSignal:
<br/>
<br/>
**1.6 Configurar OneSignal**



**1.6.1 Firebase**

1. Criar projeto no Firebase

2. Pegar CHAVE DO SERVIÇO e CÓDIGO DO REMETENTE em:  Configurações do projeto>CloudMessaging



**1.6.2 OneSignal**

1. NewApp/WebSite - Criar novo App


2. **Select plataform:** Google Android(No meu caso)
        
     **Configure Platform:** Colar CHAVE DO SERVIÇO e CODIGO DO REMETENTE

     **Select SDK:** React Native(No meu caso)
   
     **Install SDK:** Pegue o AppID e coloque no código
    <br/>
    <br/>
     Após estes passos, seu app estará pronto para receber notificações




##  2 .  Adicionar icone na notificação(Adicional)

**1. Gere o incone**

É recomendado que utilize o  Android Asset Studio
<br/>
<br/>
**2. adicione o icone**
<br/>
<br/>
Adicionar o icone gerado dentro das pastas:
<br/>
<br/>
*drawable-hdpi<br/>
*drawable-mdpi<br/>
*drawable-xhdpi<br/>
*drawable-xxhdpi<br/>
*drawable-xxxhdpi<br/>
<br/>
<br/>
Caso não tenha essas pastas, as crie.
<br/>
<br/>
**Caminho:**
     Android>App>Src>Main>Res
     <br/>
     <br/>
     <br/>
     **3. No OneSignal**
     <br/>
     Quando for criar uma notificação, em SMALL ICON, coloque o NOME do icone

