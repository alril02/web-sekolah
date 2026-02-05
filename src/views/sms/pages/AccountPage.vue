<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Fees Collection</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">Students Collection Fees Table</h2>
          <p class="text-xs text-slate-400">Fees collection details for students</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Search Here..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="phoneQuery"
            type="text"
            placeholder="Phone Number ..."
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
              <th class="px-4 py-3">Parents Name</th>
              <th class="px-4 py-3">Class</th>
              <th class="px-4 py-3">Section</th>
              <th class="px-4 py-3">Fees</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Phone</th>
              <th class="px-4 py-3">E-mail</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="item in filteredFees" :key="item.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ item.id }}</td>
              <td class="px-4 py-3">
                <div class="h-7 w-7 overflow-hidden rounded-full bg-slate-100">
                  <img :src="item.photo" :alt="item.name" class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="px-4 py-3 font-medium text-slate-700">{{ item.name }}</td>
              <td class="px-4 py-3">{{ item.gender }}</td>
              <td class="px-4 py-3">{{ item.parent }}</td>
              <td class="px-4 py-3">{{ item.className }}</td>
              <td class="px-4 py-3">{{ item.section }}</td>
              <td class="px-4 py-3">{{ item.fees }}</td>
              <td class="px-4 py-3">
                <span
                  class="rounded-full px-3 py-1 text-[10px] font-semibold uppercase"
                  :class="item.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'"
                >
                  {{ item.status }}
                </span>
              </td>
              <td class="px-4 py-3">{{ item.phone }}</td>
              <td class="px-4 py-3">{{ item.email }}</td>
              <td class="px-4 py-3">{{ item.date }}</td>
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
const phoneQuery = ref('')

const fees = [
  {
    id: '2901',
    name: 'Richi Rozario',
    gender: 'Female',
    parent: 'Nathan Smith',
    className: '1',
    section: 'A',
    fees: '$2,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/08/2017',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2902',
    name: 'Kazi Fahim',
    gender: 'Male',
    parent: 'Mike Hussy',
    className: '2',
    section: 'B',
    fees: '$1,500',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '09/08/2017',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2903',
    name: 'Richi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '4',
    section: 'C',
    fees: '$1,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/06/2010',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2904',
    name: 'Kazi Fahim',
    gender: 'Male',
    parent: 'Mike Hussy',
    className: '2',
    section: 'B',
    fees: '$500',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2905',
    name: 'Richi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '1',
    section: 'A',
    fees: '$3,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2906',
    name: 'Richi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '3',
    section: 'A',
    fees: '$5,500',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2907',
    name: 'Nchi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '5',
    section: 'D',
    fees: '$1,800',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2908',
    name: 'Mchi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '2',
    section: 'C',
    fees: '$3,500',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2909',
    name: 'Kazi Fahim',
    gender: 'Male',
    parent: 'Mike Hussy',
    className: '6',
    section: 'B',
    fees: '$2,500',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
]

const filteredFees = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const phoneValue = phoneQuery.value.trim().toLowerCase()

  return fees.filter((item) => {
    const matchesId = idValue ? item.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesPhone = phoneValue ? item.phone.toLowerCase().includes(phoneValue) : true
    return matchesId && matchesPhone
  })
})
</script>
