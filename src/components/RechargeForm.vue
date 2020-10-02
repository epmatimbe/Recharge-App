<template>
<div>
    <div class="w-100 mt-5">
      <div class="nav d-flex flex-row justify-content-between p-2 align-items-end">
          <h2>Recarregamento do telemóvel</h2>
          
        <div class="d-flex flex-column text-right text-dark">
          <div class="bg- p-1  "><span class=" font-weight-bolder text-success"><b>{{totalTransactions}}</b></span> transacções</div>
         <div class="bg- p-1"><span class=" font-weight-bolder text-info"><b>{{totalAmount}}</b></span> mt acumulados</div>
        </div>
      </div>
    </div>
    <div class="form p-5">
        <div class="container w-100 mb-4 row">
            <div class="col-4 p-2 text-left">País</div>
            <div class="col text-left">
                <select class="input w-100 p-2">
                    <option value="" >
                        -- selecionar o país --</option>
                </select> 
                <div v-if="$v.country.$error" class="text-left text-danger">
                    <span v-if="!$v.country.required">Este campo é de preenchimento obrigatório</span>
                    </div>
            </div>
        </div>
        <div class="container w-100 mb-4 row">
            <div class="col-4 p-2 text-left">Número de celular</div>
            <div class="col">
                <input type="text" 
                    name="cellphone_number"
                    v-model="$v.cellphoneNumber.$model" 
                    placeholder="Ex: 840123456" 
                    class="input w-100 p-2">
                <div v-if="$v.cellphoneNumber.$error" class="text-left text-danger">
                    <span v-if="!$v.cellphoneNumber.required">Este campo é de preenchimento obrigatório</span>
                    <span v-else-if="!$v.cellphoneNumber.numeric">Somente são permitidos números</span>
                </div>
            </div>
        </div>
        <div class="container w-100 mb-5 row">
            <div class="col-4 p-2 text-left">Código da recarga(token)</div>
            <div class="col">
                <input type="text" 
                    name="token" 
                    placeholder="XXXXXXXXXXXXXXXXXXXXXX" 
                    class="input w-100 p-2"
                    v-model="$v.token.$model" >
                <div v-if="$v.token.$error" class="text-left text-danger">
                    <span v-if="!$v.token.required">Este campo é de preenchimento obrigatório</span>
                    <span v-else-if="!$v.token.numeric">Somente são permitidos números</span>
                </div>
            </div>
        </div>
        <div class="w-100 mb-4 row pl-4">
            <button class="ml-2 p-2 rounded btn"
            @click="submit()"
                :class="{'btn-secondary':$v.$invalid,'btn-primary': !$v.$invalid}">
            <span>Recarregar</span>    
            <div class="d-none spinner-border"></div>
            </button>
        </div>
        <router-link to="/my-token">
            <div class="btn-get-token font-italic">Clique aqui para obter a recarga(token)</div>
        </router-link>
    </div>
</div>
</template>
<script>
import { required, numeric } from 'vuelidate/lib/validators'
import { getTotalTransactions,getAmount } from "./../core/get_api_data.js";

export default {
    data(){
        return{
            cellphoneNumber:"",
            country:"",
            token:"",
            totalTransactions: 0,
            totalAmount: 0,
        }
    },
    validations: {
        country: {required},
        cellphoneNumber: {required, numeric},
        token: {required, numeric},
    },
    created(){
        getTotalTransactions()
        .then(response => {
            this.totalTransactions = response.data.length;
        });

        getAmount()
        .then(response => {
            this.totalAmount = response.data.length;
        });  
    },
    methods:{
        submit(){
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }


        }
    }
}
</script>
<style>
.form{
    width: 60%;
    margin: 0 auto;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
}
.prefix{
    border: 1px solid grey;
    padding: .6rem;
    background: white;
    appearance: none;
}
.prefix::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color:grey;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select,input{
  border: 1px solid #d1d1d1;
  border-radius: 4px;
}
select:focus,input:focus{
  border: 1px solid #007bff;
  border-radius: 4px;
}
.btn-get-token{
    color:#5d5d5d;
    text-decoration: underline;
}
.btn-get-token:hover{
    color:#007bff;
}
</style>