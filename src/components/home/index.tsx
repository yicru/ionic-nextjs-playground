import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

export const HomePage: React.VFC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="h-full flex flex-col justify-center items-center space-y-2">
          <strong>Ready to create an app?</strong>
          <p>
            <span className="mr-2">Start with Ionic</span>
            <a
              className="text-blue-500 underline"
              href="https://ionicframework.com/docs/components"
              rel="noopener noreferrer"
              target="_blank"
            >
              UI Components
            </a>
          </p>
          <IonButton routerLink="/tabs/sw">StarWars</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}
