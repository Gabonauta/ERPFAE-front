<template>
    <q-page class="q-pa-md" >
    <div class="row q-pl-lg">
      
      <div class="col q-pl-lg q-pt-md">
        <h3 class="text-weight-bolder desktop-only">Nuevo Tipo de Componente</h3>
      </div>
      
    </div>
    
    <div class="q-pa-sm" >

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="row q-gutter-y-md q-gutter-x-xl justify-center">
        <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10 ">
          <q-btn-dropdown  label="Tipo Aeronave">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Alhpa</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Betha</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Omega</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </q-btn-dropdown>
        </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        v-model="nombre"
        label="Nombre"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa nombre',
                  ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="numero"
        label="Número de parte"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa número',
          val => val > 0 && val < 100 || 'Ingresa número'
        ]"
      />
     </div>
     <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="cantidad"
        label="Cantidad en el avión"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />

      </div>
    
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
       <q-btn-dropdown  label="Fabricante">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Alhpa</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Betha</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Omega</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </q-btn-dropdown>
      </div>
    </div>
      
      <div class="row reverse q-pr-xl" >
        <div class="column q-mr-md">
        <q-btn rounded label="Guardar" type="submit" color="green"/>
        
      </div>
      <div class="column q-mr-md">
        <q-btn rounded label="Cancelar" type="submit" color="red"/>
        
      </div>
      </div>
      
    </q-form>

  </div>
    
    </q-page>
</template>

<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
     setup () {
         const $q = useQuasar()

    
    const age = ref(null)
    const abreviacion = ref(null)
    const accept = ref(false)
    return {
        abreviacion,
      age,
      accept,
       onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
       onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }

          }
          
  }

}
</script>

<style>

</style>