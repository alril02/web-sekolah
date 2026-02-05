<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Expenses</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Expenses List</h2>
          <p class="text-xs text-slate-400">Expense records overview</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Type Here..."
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
              <th class="px-4 py-3">Expense Type</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Phone</th>
              <th class="px-4 py-3">E-mail</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="item in filteredExpenses" :key="item.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ item.id }}</td>
              <td class="px-4 py-3">{{ item.type }}</td>
              <td class="px-4 py-3">{{ item.name }}</td>
              <td class="px-4 py-3">{{ item.amount }}</td>
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

const expenses = [
  {
    id: '2901',
    type: 'Salary',
    name: 'Nathan Smith',
    amount: '$20,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/08/2017',
  },
  {
    id: '2902',
    type: 'Utility Expense',
    name: 'Mike Hussy',
    amount: '$1,500',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '09/08/2017',
  },
  {
    id: '2903',
    type: 'Transport',
    name: 'David Smith',
    amount: '$1,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/06/2010',
  },
  {
    id: '2904',
    type: 'Salary',
    name: 'Mike Hussy',
    amount: '$15,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2905',
    type: 'Salary',
    name: 'David Smith',
    amount: '$13,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2906',
    type: 'Stationary',
    name: 'David Smith',
    amount: '$5,500',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2907',
    type: 'Transport',
    name: 'Navik Cmith',
    amount: '$1,800',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2908',
    type: 'Salary',
    name: 'David Smith',
    amount: '$35,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2909',
    type: 'Salary',
    name: 'Mike Hussy',
    amount: '$25,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2910',
    type: 'Utility',
    name: 'David Smith',
    amount: '$1,200',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2911',
    type: 'Stationary',
    name: 'David Smith',
    amount: '$8,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2912',
    type: 'Stationary',
    name: 'Mike Hussy',
    amount: '$1,000',
    status: 'Due',
    phone: '+ 8812 001445',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2913',
    type: 'Salary',
    name: 'David Smith',
    amount: '$17,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2914',
    type: 'Salary',
    name: 'David Smith',
    amount: '$15,000',
    status: 'Due',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2915',
    type: 'Stationary',
    name: 'Bavid Smith',
    amount: '$13,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2916',
    type: 'Salary',
    name: 'David Smith',
    amount: '$15,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
  {
    id: '2917',
    type: 'Utility',
    name: 'Tavid Smith',
    amount: '$6,000',
    status: 'Paid',
    phone: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    date: '10/03/2010',
  },
]

const filteredExpenses = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const phoneValue = phoneQuery.value.trim().toLowerCase()

  return expenses.filter((item) => {
    const matchesId = idValue ? item.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesPhone = phoneValue ? item.phone.toLowerCase().includes(phoneValue) : true
    return matchesId && matchesPhone
  })
})
</script>
