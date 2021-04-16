import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { HomePage } from './components/home'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
