<template>
    <div class="form p-5">
        <div class="container w-100 mb-4 row">
            <div class="col-4 p-3 text-left">Prefixo</div>
            <div class="col text-left">
                <select class="input w-25 p-3">
                    <option value="" >
                        -- selecionar prefixo --</option>
                </select> 
            </div>
        </div>
        <div class="container w-100 mb-4 row">
            <div class="col-4 p-3 text-left">Número de celular</div>
            <div class="col">
                <input type="text" 
                    name="cellphone_number" 
                    placeholder="Ex: 8401234567" 
                    class="input w-100 p-3">
            </div>
        </div>
        <div class="container w-100 mb-5 row">
            <div class="col-4 p-3 text-left">Código da recarga(token)</div>
            <div class="col">
                <input type="text" 
                    name="token" 
                    placeholder="XXXXXXXXXXXXXXXXXXXXXX" 
                    class="input w-100 p-3">
            </div>
        </div>
        <div class="w-100 mb-4 row pl-4">
            <button class="btn-primary ml-2 p-2 rounded ">Recarregar</button>
        </div>
    </div>
</template>
<script>
export default {
    
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

select:focus,input:focus{
  border: 1px solid #007bff;
  border-radius: 4px;
}
/* 
.input{
    border-radius: 0;
    border-width: 1px;
    padding: .5rem;
    border-color: grey;
    border-style: solid;
    margin: 0 auto;
}
select:focus,input:focus{
    border-color: rgb(0, 132, 255);
} */

</style>