<template>
  <div id="container">
    <p>
      <strong>Mat Bond</strong>
    </p>
    <p>1234 5678 90</p>

    <div class="icon">
      <ion-icon :icon="water"></ion-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { water } from "ionicons/icons";
export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
  },
  components: {
    IonIcon,
  },
  setup() {
    return {
      water,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.icon {
  font-size: 3rem;
  color: blue;
}
</style>
