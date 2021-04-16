import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { TabsPage } from './components/tabs'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={TabsPage} path="/tabs" />
        <Redirect exact from="/" to="/tabs" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
