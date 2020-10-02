<template>
<div>
    <div class="w-100 mt-5">
          <h2 class="">Obter o meu token</h2>
    </div>
    <div class="form p-5">
        <div class="container w-100 mb-4 row">
            <div class="col-4 p-3 text-left">Valor</div>
            <div class="col">
                <input type="text" 
                    name="cellphone_number"
                    v-model="$v.amount.$model" 
                    placeholder="Ex: 50" 
                    class="input w-100 p-3">
                <div v-if="$v.amount.$error" class="text-left text-danger">
                    <span v-if="!$v.amount.required">Este campo é de preenchimento obrigatório</span>
                    <span v-else-if="!$v.amount.numeric">Somente são permitidos números</span>
                </div>
            </div>
        </div>
        
        <div class="w-100 mb-4 row pl-4 text-center">
            <button class="ml-2 p-2 rounded w-25"
                :class="{'btn-secondary':$v.$invalid,'btn-primary': !$v.$invalid}">
            <span>Obter</span>    
            <div class="d-none spinner-border"></div>
            </button>
        </div>
        <router-link to="/recharge">
            <div class="btn-get-token font-italic">Clique aqui para recargar o seu telemóvel</div>
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
            amount:"",
        }
    },
    validations: {
        amount: {required, numeric},
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