<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>SMS</span>
      <span>›</span>
      <span class="text-slate-700">Admin</span>
    </div>

    <div class="rounded-2xl bg-white/90 p-6 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-semibold text-slate-800">Manage Users</h2>
          <p class="mt-1 text-sm text-slate-500">Kelola akun pengguna dan peran aplikasi.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
            Export
          </button>
          <button
            class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            @click="isAddUserOpen = true"
          >
            + Add User
          </button>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">👨‍🏫</div>
        <div>
          <p class="text-xs text-slate-400">Guru</p>
          <p class="text-2xl font-semibold text-slate-800">{{ summaryCounts.guru }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🎓</div>
        <div>
          <p class="text-xs text-slate-400">Siswa</p>
          <p class="text-2xl font-semibold text-slate-800">{{ summaryCounts.siswa }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">👨‍👩‍👧‍👦</div>
        <div>
          <p class="text-xs text-slate-400">Orang Tua Murid</p>
          <p class="text-2xl font-semibold text-slate-800">{{ summaryCounts.orangTua }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600">🛡️</div>
        <div>
          <p class="text-xs text-slate-400">Administrator</p>
          <p class="text-2xl font-semibold text-slate-800">{{ summaryCounts.admin }}</p>
        </div>
      </div>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h3 class="text-lg font-semibold text-slate-800">Daftar Pengguna</h3>
          <p class="text-xs text-slate-400">Ringkasan akun terdaftar pada aplikasi.</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="nameQuery"
            type="text"
            placeholder="Type Name..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="emailQuery"
            type="text"
            placeholder="Type Email..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <select
            v-model="roleQuery"
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 focus:outline-none"
          >
            <option value="">Semua Role</option>
            <option value="Guru">Guru</option>
            <option value="Siswa">Siswa</option>
            <option value="Orang Tua Murid">Orang Tua Murid</option>
            <option value="Administrator">Administrator</option>
          </select>
          <select
            v-model="statusQuery"
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 focus:outline-none"
          >
            <option value="">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Pending">Pending</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
          <button class="h-9 cursor-pointer rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase tracking-wide text-white">
            Search
          </button>
          <button
            class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500"
            @click="resetFilters"
          >
            ↻
          </button>
          <div class="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
            <span>Show</span>
            <select
              v-model.number="perPage"
              class="cursor-pointer bg-transparent text-xs text-slate-600 focus:outline-none"
            >
              <option v-for="option in perPageOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
            <span>entries</span>
          </div>
        </div>
      </div>

      <div class="sms-scroll min-h-0 flex-1 overflow-x-auto overflow-y-auto">
        <div v-if="isLoading" class="px-6 py-4 text-sm text-slate-500">Memuat data...</div>
        <div v-else-if="loadError" class="px-6 py-4 text-sm text-rose-500">{{ loadError }}</div>
        <table class="min-w-full text-left text-xs">
          <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
            <tr>
              <th class="px-4 py-3"><input type="checkbox" /></th>
              <th class="px-4 py-3">Nama</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">Role</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="user in paginatedUsers" :key="user.email" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3 font-medium text-slate-700">{{ user.name }}</td>
              <td class="px-4 py-3">{{ user.email }}</td>
              <td class="px-4 py-3">{{ user.role }}</td>
              <td class="px-4 py-3">
                <span
                  class="rounded-full px-3 py-1 text-xs"
                  :class="user.status === 'Aktif' ? 'bg-emerald-100 text-emerald-600' : user.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'"
                >
                  {{ user.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center justify-center gap-2">
                  <button
                    class="h-7 w-7 cursor-pointer rounded-full bg-emerald-50 text-emerald-600"
                    @click="openEditDialog(user)"
                  >
                    ✎
                  </button>
                  <button class="h-7 w-7 cursor-pointer rounded-full bg-rose-50 text-rose-600">🗑</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-6 py-4 text-xs text-slate-500">
        <p>
          Showing
          <span class="font-semibold text-slate-700">{{ pageStart }}</span>
          to
          <span class="font-semibold text-slate-700">{{ pageEnd }}</span>
          of
          <span class="font-semibold text-slate-700">{{ filteredUsers.length }}</span>
          entries
        </p>
        <div class="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          <span>Show</span>
          <select
            v-model.number="perPage"
            class="cursor-pointer bg-transparent text-xs text-slate-600 focus:outline-none"
          >
            <option v-for="option in perPageOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <span>entries</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="cursor-pointer rounded-full border border-slate-200 px-3 py-1"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            Prev
          </button>
          <span class="rounded-full bg-slate-900 px-3 py-1 text-white">{{ currentPage }}</span>
          <button
            class="cursor-pointer rounded-full border border-slate-200 px-3 py-1"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Next
          </button>
        </div>
      </div>
    </section>

    <AddUserDialog v-model="isAddUserOpen" @created="handleUserCreated" />
    <EditUserDialog v-model="isEditUserOpen" :user="selectedUser" @updated="handleUserUpdated" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import AddUserDialog from '../components/AddUserDialog.vue'
import EditUserDialog from '../components/EditUserDialog.vue'

const perPageOptions = [5, 10, 20]
const perPage = ref(10)
const currentPage = ref(1)
const nameQuery = ref('')
const emailQuery = ref('')
const roleQuery = ref('')
const statusQuery = ref('')
const isAddUserOpen = ref(false)
const isEditUserOpen = ref(false)
const selectedUser = ref(null)

const users = ref([])
const isLoading = ref(false)
const loadError = ref('')
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const mapRoleLabel = (role) => {
  const value = (role || '').toString().toLowerCase()
  if (value === 'administrator') return 'Administrator'
  if (value === 'siswa') return 'Siswa'
  if (value === 'orang_tua') return 'Orang Tua Murid'
  if (value === 'pengelola') return 'Guru'
  return role || '-'
}

const mapStatusLabel = (status) => {
  if (!status) return 'Aktif'
  return status
}

const fetchUsers = async () => {
  isLoading.value = true
  loadError.value = ''

  try {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData?.message || 'Gagal memuat data user.')
    }
    const data = await response.json()
    users.value = Array.isArray(data)
      ? data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: mapRoleLabel(user.role),
          status: mapStatusLabel(user.status),
          note: user.note,
        }))
      : []
  } catch (error) {
    loadError.value = error?.message || 'Gagal memuat data user.'
  } finally {
    isLoading.value = false
  }
}

const summaryCounts = computed(() => {
  const counts = { guru: 0, siswa: 0, orangTua: 0, admin: 0 }
  users.value.forEach((user) => {
    if (user.role === 'Guru') counts.guru += 1
    if (user.role === 'Siswa') counts.siswa += 1
    if (user.role === 'Orang Tua Murid') counts.orangTua += 1
    if (user.role === 'Administrator') counts.admin += 1
  })
  return counts
})

const filteredUsers = computed(() => {
  const nameValue = nameQuery.value.trim().toLowerCase()
  const emailValue = emailQuery.value.trim().toLowerCase()
  const roleValue = roleQuery.value.trim().toLowerCase()
  const statusValue = statusQuery.value.trim().toLowerCase()

  return users.value.filter((user) => {
    const matchesName = nameValue ? user.name.toLowerCase().includes(nameValue) : true
    const matchesEmail = emailValue ? user.email.toLowerCase().includes(emailValue) : true
    const matchesRole = roleValue ? user.role.toLowerCase() === roleValue : true
    const matchesStatus = statusValue ? user.status.toLowerCase() === statusValue : true
    return matchesName && matchesEmail && matchesRole && matchesStatus
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredUsers.value.length / perPage.value)))
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredUsers.value.slice(start, start + perPage.value)
})

const pageStart = computed(() => {
  if (filteredUsers.value.length === 0) return 0
  return (currentPage.value - 1) * perPage.value + 1
})

const pageEnd = computed(() => {
  return Math.min(currentPage.value * perPage.value, filteredUsers.value.length)
})

const resetFilters = () => {
  nameQuery.value = ''
  emailQuery.value = ''
  roleQuery.value = ''
  statusQuery.value = ''
}

watch(perPage, () => {
  currentPage.value = 1
})

watch([nameQuery, emailQuery, roleQuery, statusQuery], () => {
  currentPage.value = 1
})

watch(currentPage, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})

const handleUserCreated = () => {
  fetchUsers()
}

const handleUserUpdated = () => {
  fetchUsers()
}

const openEditDialog = (user) => {
  selectedUser.value = user
  isEditUserOpen.value = true
}

onMounted(() => {
  fetchUsers()
})
</script>
