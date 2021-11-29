<template>
    <q-page class="q-pa-md" >
    <div class="row reverse q-mb-md">
      <div class="column reverse">
        <q-btn rounded color="primary" icon="add_circle_outline" label="Agregar" /> 
      </div>
      <div class="col">
        <h3 class="text-weight-bolder desktop-only">Información Técnica</h3>
      </div>
      
    </div>
      

    
    

    <q-card>
        <div class="q-pa-lg row reverse " >
           <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Buscar"
        style="width: 30  0px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
        </div>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="aeronave" label="Aeronave" />
          <q-tab name="componente" label="Componente" />
          <q-tab name="subcomponente" label="Subcomponente" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel  name="aeronave">
             
            <q-table
                :rows="rows"
                row-key="name"
            />
          </q-tab-panel>

          <q-tab-panel name="componente">
             <q-table
                :rows="rows1"
                row-key="name"
            />
          </q-tab-panel>

          <q-tab-panel name="subcomponente">
            <q-table
                :rows="rows2"
                row-key="name"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page>
</template>

<script>
const rows = [
  {
    Escuadrón: '2411 - Lince',
    Abreviación: 'T-34C-1',
    Código: 'T-34C-1',
    Descripción: 'Avión de entrenamiento avanzado',
    
  },
]
const rows1 = [
  {
    Aeronave: 'AW-119 MKII-Helicóptero',
    Nombre: 'Motor',
    Cantidad: 1,
    Descripción: 'Pratt & Whitney',
    
  },
]
const rows2 = [
  {
    Componente: 'Motor Turbo Moteur TM 3332 B2',
    Fabricante: 'Hall',
    Cantidad: 1,
    Descripción: 'Motor 1',
    
  },
]

import{ref}from 'vue'
export default {
     setup () {
    return {
      tab: ref('mails'),
      rows,
      rows1,
      rows2
    }
  }

}
</script>

<style>

</style>