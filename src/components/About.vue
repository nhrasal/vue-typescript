<template>
  <div class="hello">
    <h1>{{ this.msg }}</h1>
    <!-- <div v-if="isLoadding" -->
    {{ isLoadding ? "isLoading" : JSON.stringify(todos) }}
  </div>
</template>

<script lang="ts">
import { TodoService } from "@/@services/apiServices/Todos.apiService";
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
export default class About extends Vue {
  // @Prop() private msg!: string;
  private todos: any[] = [];
  private isLoadding: boolean = true;

  mounted() {
    console.log("this is call from mounted");
  }
  data(): DataObject {
    return {
      profile: [],
      msg: "hello world from about",
    };
  }
  beforeCreate() {
    console.log("this is call from beforeCreate");
  }
  created() {
    console.log("this is call from created");
    TodoService.getAll({}).subscribe(
      (resp: any[]) => {
        console.log(resp);
        this.todos = resp;
        setTimeout(() => {
          this.isLoadding = false;
        }, 2000);
      },
      (error) => {
        console.log(error);
        this.isLoadding = false;
        this.todos = [];
      }
    );
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
  // renderTracked({ key, target, type }: any) {
  //   console.log("this is call from renderTracked");
  // }
  // renderTriggered({ key, target, type }: any) {
  //   console.log("this is call from renderTriggered");
  // }
  getData = () => {
    // TodoService.getAll({}).subscribe(
    //   (resp: any[]) => {
    //     console.log(resp);
    //     this.profile[]=resp
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
