# pushNotification
Esta documentação tem como objetivo a explicação de como criar e manipular push notification:

Nesta documentação você encontrará informações sobre:

**1.OneSignal**

**2.Zapier(adicional)**


## OneSignal


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



**1.4.2** Dentro da android no seu app/build.gradle, verifique se seu compileSdkVersione
 e buildToolsVersion possui a versão 26 da API ou superior
 
      android {
          compileSdkVersion 27
          buildToolsVersion '27.0.3'
          // ...
      }
      
  **1.5 Inicializando**
  
  
  
     import React, { Component } from 'react';
     import OneSignal from 'react-native-onesignal'; // Import package from node modules

     export default class App extends Component {

     constructor(properties) {
         super(properties);
         OneSignal.init("YOUR_ONESIGNAL_APPID");

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
