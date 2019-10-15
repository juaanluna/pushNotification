# pushNotification
Esta documentação tem como objetivo a explicação de como criar e manipular push notification:

Nesta documentação você encontrará informações sobre:

1.OneSignal

2.Zapier(adicional)


1.One signal

1.1 Instalação

     npm install --save react-native-onesignal

1.2 Link OneSignal
        
    react-native link react-native-onesignal

1.3 Instruções específicas para Android
No seu AndroidManifest.xml, adicione android:launchMode="singleTop"
como um atributo à sua atividade principal.

    <application ....>
      <activity
        android:name=".MainActivity"
        android:label="OneSignal Example"
        android:launchMode="singleTop"> <!-- Add this attribute to your main activity -->
      </activity>
        .....


1.4 Adicionando o plug-in Gradle

1.4.1 Na parte superior do seu projeto Android app/build.gradle,
 adicione o seguinte código na parte superior do arquivo:

    buildscript {
        repositories {
            maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
        }
        dependencies {
            classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.1, 0.99.99]'
        }
    }



1.4.2 Dentro da android { ... }seção no seu app/build.gradle, verifique se você é compileSdkVersione
 buildToolsVersiontem pelo menos o nível 26 da API ou superior
 
      android {
          compileSdkVersion 27
          buildToolsVersion '27.0.3'
          // ...
      }
