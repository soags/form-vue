<script setup>
import { ref } from 'vue'

const defects = ref([
  {
    id: 1,
    partNo: '00000-00001',
    partName: 'パーツ1',
    quantity: 1,
    defectReason: '不良理由1'
  }
])
</script>

<template>
  <main>
    <button>追加</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>品番</th>
          <th>品名</th>
          <th>数量</th>
          <th>不良理由</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="defect in defects" :key="defect.id">
          <td>{{ defect.id }}</td>
          <td>{{ defect.partNo }}</td>
          <td>{{ defect.partName }}</td>
          <td>{{ defect.quantity }}</td>
          <td>{{ defect.defectReason }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
