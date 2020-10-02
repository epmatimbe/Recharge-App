<template>
  <div id="app">
    <div class="w-100 mt-5">
      <div class="nav d-flex flex-row justify-content-between p-2 align-items-end">
          <h2>Recarregamento do telemóvel</h2>
          
        <div class="d-flex flex-column text-left">
          <div>0 transacções</div>
         <div>0mt acumulados</div>
        </div>
      </div>
    </div>
    <RechargeForm/>
  </div>
</template>

<script>
import RechargeForm from "./components/RechargeForm";
export default {
  name: 'App',
  components: {
    RechargeForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
.nav{
  width: 60%;
  margin: 0 auto;
}
</style>
