<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Parents</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Parents List</h2>
          <p class="text-xs text-slate-400">Manage and review parent information</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Type Here..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="mobileQuery"
            type="text"
            placeholder="Type Mobile Number ..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <button class="h-8 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase text-white">Search</button>
          <button class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
        </div>
      </div>

      <div class="sms-scroll min-h-0 flex-1 overflow-x-auto overflow-y-auto">
        <table class="min-w-full text-left text-xs">
          <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
            <tr>
              <th class="px-4 py-3"><input type="checkbox" /></th>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Photo</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Gender</th>
              <th class="px-4 py-3">Occupation</th>
              <th class="px-4 py-3">Address</th>
              <th class="px-4 py-3">Mobile No</th>
              <th class="px-4 py-3">E-mail</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="parent in filteredParents" :key="parent.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ parent.id }}</td>
              <td class="px-4 py-3">
                <div class="h-7 w-7 overflow-hidden rounded-full bg-slate-100">
                  <img :src="parent.photo" :alt="parent.name" class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="px-4 py-3 font-medium text-slate-700">{{ parent.name }}</td>
              <td class="px-4 py-3">{{ parent.gender }}</td>
              <td class="px-4 py-3">{{ parent.occupation }}</td>
              <td class="px-4 py-3">{{ parent.address }}</td>
              <td class="px-4 py-3">{{ parent.mobile }}</td>
              <td class="px-4 py-3">{{ parent.email }}</td>
              <td class="px-4 py-3">
                <div class="flex items-center justify-center gap-2">
                  <button class="h-6 w-6 rounded-full bg-slate-100 text-slate-600">👁</button>
                  <button class="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600">✎</button>
                  <button class="h-6 w-6 rounded-full bg-rose-50 text-rose-600">🗑</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const idQuery = ref('')
const mobileQuery = ref('')

const parents = [
  {
    id: '2901',
    name: 'Richi Rozario',
    gender: 'Female',
    occupation: 'House Wife',
    address: 'TA-110, North Sydney',
    mobile: '+ 8812 00 5098',
    email: 'edisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2902',
    name: 'Kazi Fahim',
    gender: 'Male',
    occupation: 'Businessman',
    address: 'PA-110, alaker goli exress side',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2903',
    name: 'Richi Rozario',
    gender: 'Female',
    occupation: 'Banker',
    address: '98 street mechaw Sydney',
    mobile: '+ 8812 00 5098',
    email: 'richirozario@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2904',
    name: 'Maccullam',
    gender: 'Male',
    occupation: 'Account',
    address: '110 street, hibrid okland',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2905',
    name: 'Richi Rozario',
    gender: 'Female',
    occupation: 'House Wife',
    address: 'TA-110, North Sydney',
    mobile: '+ 8812 00 5098',
    email: 'edisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
]

const filteredParents = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const mobileValue = mobileQuery.value.trim().toLowerCase()

  return parents.filter((parent) => {
    const matchesId = idValue ? parent.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesMobile = mobileValue ? parent.mobile.toLowerCase().includes(mobileValue) : true
    return matchesId && matchesMobile
  })
})
</script>
