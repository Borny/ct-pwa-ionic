<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/billing">
          <ion-icon :icon="wallet" />
          <ion-label>Billing</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/consumption">
          <ion-icon :icon="swapVertical" />
          <ion-label>Consumption</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  ellipse,
  wallet,
  square,
  triangle,
  home,
  homeOutline,
  swapVertical,
  walletOutline,
  personCircle,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      wallet,
      homeOutline,
      home,
      swapVertical,
      walletOutline,
      personCircle,
    };
  },
});
</script>
