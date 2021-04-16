import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { flash, home } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'

import { HomePage } from '../home'
import { SWPage } from '../sw'

export const TabsPage = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact component={HomePage} path="/tabs/home" />
        <Route exact component={SWPage} path="/tabs/sw" />
        <Redirect exact from="/tabs" to="/tabs/home" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton href="/tabs/home" tab="tab1">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton href="/tabs/sw" tab="tab2">
          <IonIcon icon={flash} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}
