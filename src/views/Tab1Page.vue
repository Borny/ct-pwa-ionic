<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button
            @click="openMenu"
            menu="main"
            auto-hide="false"
          ></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Home" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  menuController,
  IonIcon,
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
import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonMenuButton,
  },
  methods: {
    openMenu() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
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
