import {
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React, { ComponentProps, useEffect, useState } from 'react'
import { useCallback } from 'react'

import { IPeople } from '../../interfaces/people'

type OnIonInfiniteFn = ComponentProps<typeof IonInfiniteScroll>['onIonInfinite']

export const SWPage: React.VFC = () => {
  const [nextUrl, setNextUrl] = useState('https://swapi.dev/api/people/')
  const [peoples, setPeoples] = useState<IPeople[]>([])
  const [isDisabled, setIsDisabled] = useState(false)

  const loadNextPeoples = useCallback(async () => {
    const data = await fetch(nextUrl).then((response) => response.json())
    const results = data.results as IPeople[]
    setNextUrl(data.next as string)
    setPeoples((prevPeoples) => [...prevPeoples, ...results])
  }, [nextUrl])

  useEffect(() => {
    loadNextPeoples()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnInfinite: OnIonInfiniteFn = async (e) => {
    await loadNextPeoples()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.target?.complete()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>StarWards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          onClick={() => setIsDisabled((prev) => !prev)}
        >
          Toggle Infinite Scroll
        </IonButton>
        <IonList>
          {peoples.map((people, index) => (
            <IonItem key={`people-${index}`}>
              <IonLabel>{people.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          disabled={isDisabled}
          id="infinite-scroll"
          threshold="100px"
          onIonInfinite={handleOnInfinite}
        >
          <IonInfiniteScrollContent />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}
