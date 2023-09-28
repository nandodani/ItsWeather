import "./Details.styles.css";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

function App() {
  return (
    <>
      <h2>Details</h2>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Visibilidade
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Dados da Visibilidade</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Humidade</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Dados da Humidade</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>{" "}
        <IonRow>
          <IonCol size="12">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Vento</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Grafico do Vento</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>UV</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Dados da UV</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>GM</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Dados da Visibilidade</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default App;
