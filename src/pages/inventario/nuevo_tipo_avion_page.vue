<template>
    <q-page class="q-pa-md" >
    <div class="row q-pl-lg">
      
      <div class="col q-pl-lg q-pt-md">
        <h3 class="text-weight-bolder desktop-only">Nuevo Tipo de Aeronave</h3>
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
          <q-btn-dropdown  label="Escuadrón">
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
        v-model="abreviacion"
        label="Abreviación"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa abreviación',
                  ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        v-model="jet"
        label="Tipo jet"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa si o no',
        ]"
      />
     </div>
     <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="motores"
        label="Cantidad de motores"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="pasajeros"
        label="Cantidad de pasajeros"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 200 || 'ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="combustible"
        label="Combustible por hora"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="autonomia"
        label="Autonomia de vuelo"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="alto"
        label="Altura"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="velocidad"
        label="Velocidad máxima"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          
          val => val > 0 && val < 500|| 'Ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="distanciaAterrizaje"
        label="Distancia de aterrizaje"
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
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="text"
        v-model="nominativo"
        label="Nominativo"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa nominativo',
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
       <q-btn-dropdown  label="Estado">
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
        type="number"
        v-model="peso"
        label="Peso vacío"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />

      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="carga"
        label="Carga Total"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="combustibleTotal"
        label="Total combustible"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="largo"
        label="Largo"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="diametro"
        label="Diametro rotor"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="techo"
        label="Techo vuelo"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="costo"
        label="Costo operación"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
       <q-btn-dropdown  label="Titular">
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
        type="text"
        v-model="descripcion"
        label="Descrición"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa descripción',
          
        ]"
      />
      </div>
       <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
       <q-btn-dropdown  label="Tipo aeronave">
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
        type="number"
        v-model="capacidadCarga"
        label="Capacidad de carga"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="combustibleExterno"
        label="Combustible externo"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="potencia"
        label="Potencia motor"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="ancho"
        label="Ancho"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="velocidadCrucero"
        label="Velocidad crucero"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="distanciaDespegue"
        label="Distancia de despegue"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="number"
        v-model="tripulantesNumero"
        label="Número de tripulantes"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa cantidad',
          val => val > 0 && val < 100 || 'Ingresa cantidad'
        ]"
      />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-5 col-xs-10">
        <q-input
        filled
        type="text"
        v-model="tripulantesDescripcion"
        label="Tripulantes observación"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa descripción',
        ]"
      />
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

    
        const abreviacion = ref(null)
        const jet = ref(null)
        const motores = ref(null)
        const pasajeros = ref(null)
        const combustible = ref(null)
        const autonomia = ref(null)
        const alto = ref(null)
        const velocidad = ref(null)
        const distanciaAterrizaje = ref(null)
        const nominativo = ref(null)
        const peso = ref(null)
        const carga = ref(null)
        const combustibleTotal = ref(null)
        const largo = ref(null)
        const diametro = ref(null)
        const techo = ref(null)
        const costo = ref(null)
        const descripcion = ref(null)
        const capacidadCarga = ref(null)
        const combustibleExterno = ref(null)
        const potencia = ref(null)
        const ancho = ref(null)
        const velocidadCrucero = ref(null)
        const distanciaDespegue = ref(null)
        const tripulantesNumero = ref(null)
        const tripulantesDescripcion = ref(null)

        const accept = ref(false)
    return {
      abreviacion,
      jet,
      motores,
      pasajeros,
      combustible,
      autonomia,
      alto,
      velocidad,
      distanciaAterrizaje,
      nominativo,
      peso,
      carga,
      combustibleTotal,
      largo,
      diametro,
      techo,
      costo,
      descripcion,
      capacidadCarga,
      combustibleExterno,
      potencia,
      ancho,
      velocidadCrucero,
      distanciaDespegue,
      tripulantesNumero,
      tripulantesDescripcion,
      
      accept,
       onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Debes completar todos los campos'
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
        accept.value = false
      }

          }
          
  }

}
</script>

<style>

</style>