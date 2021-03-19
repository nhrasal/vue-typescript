<template>
  <div class="hello">
    <h1>{{ this.msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export interface IProfile {
  name: string;
  phoneNumber: number;
  email: string;
  gender: string;
  age: number;
  address: string;
}
interface DataObject {
  profile: IProfile[];
  msg?: string;
}
@Component
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
  mounted() {
    console.log("this is call from mounted");
  }
  data(): DataObject {
    return {
      profile: [],
      msg: "hello world from home",
    };
  }
  created() {
    console.log("this is call from created");
  }
  beforeUpdate() {
    console.log("this is call from beforeUpdate");
  }
  updated() {
    console.log("this is call from updated");
  }
  activated() {
    console.log("this is call from activated");
  }
  deactivated() {
    console.log("this is call from deactivated");
  }
  beforeUnmount() {
    console.log("this is call from beforeUnmount");
  }
  unmounted() {
    console.log("this is call from unmounted");
  }
  
  beforeCreate() {
    console.log("this is call from beforeCreate");
  }
  // renderTracked({ key, target, type }: any) {
  //   console.log("this is call from renderTracked");
  // }
  // renderTriggered({ key, target, type }: any) {
  //   console.log("this is call from renderTriggered");
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
