<template>
  <div class="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80')"
    ></div>
    <div class="absolute inset-0 bg-linear-to-br from-[#0f172a]/95 via-[#0f172a]/75 to-[#1f4a8a]/70"></div>
    <div class="absolute inset-0">
      <div class="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#facc15]/15 blur-3xl"></div>
      <div class="absolute right-0 top-24 h-96 w-96 rounded-full bg-[#38bdf8]/15 blur-3xl"></div>
      <div class="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f97316]/15 blur-3xl"></div>
    </div>

    <div class="fixed inset-0 z-10 flex flex-col">
      <header class="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between gap-4 border-b border-white/10 bg-white/10 px-6 text-white/80 shadow-sm backdrop-blur">
        <div class="flex items-center gap-3">
          <button
            class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[#facc15]/90 text-[#0f172a]"
            type="button"
            @click="toggleDrawer"
          >
            ☰
          </button>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Welcome to</p>
            <h1 class="text-base font-semibold text-white">Akkhor School Management System</h1>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <div class="flex w-full max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <span class="text-white/70">🔍</span>
            <input
              type="text"
              placeholder="Search here..."
              class="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-white/70">
          <div class="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
            🌐 <span>English</span>
          </div>
          <div class="relative">
            <span class="text-lg">🔔</span>
            <span class="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 text-[10px] text-white">8</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-full bg-white/20"></div>
            <div class="leading-tight">
              <p class="text-xs font-semibold text-white">Kazi Fahim</p>
              <p class="text-[10px] text-white/50">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <div class="flex h-full pt-16">
        <aside
          class="flex h-[calc(100vh-4rem)] flex-col border-r border-white/10 bg-white/10 text-white backdrop-blur transition-all duration-300"
          :class="isDrawerCollapsed ? 'w-20' : 'w-64'"
        >
          <div
            class="border-b border-white/10 px-6 py-5"
            :class="isDrawerCollapsed ? 'flex items-center justify-center px-4' : ''"
          >
            <div class="text-lg font-bold tracking-wide text-white" :class="isDrawerCollapsed ? 'sr-only' : ''">
              Akkhor
            </div>
            <p class="text-xs text-white/60" :class="isDrawerCollapsed ? 'sr-only' : ''">
              School Management
            </p>
            <div
              v-if="isDrawerCollapsed"
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white"
            >
              <font-awesome-icon :icon="['fas', 'school']" class="text-sm" />
            </div>
          </div>
          <nav
            class="sms-scroll flex-1 overflow-y-auto py-6 text-sm"
            :class="isDrawerCollapsed ? 'px-3' : 'px-4'"
          >
            <p
              class="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
              :class="isDrawerCollapsed ? 'opacity-0' : 'opacity-100'"
            >
              Main
            </p>
            <ul class="mt-3 space-y-1">
              <router-link
                to="/sms"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'gauge-high']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Dashboard</span>
              </router-link>
              <li
                class="flex cursor-pointer items-center rounded-lg px-3 py-2 text-white/70 hover:bg-white/15"
                :class="isDrawerCollapsed ? 'justify-center' : 'gap-3'"
              >
                <font-awesome-icon :icon="['fas', 'user-shield']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Admin</span>
              </li>
              <router-link
                to="/sms/students"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/students') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'user-graduate']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Student</span>
              </router-link>
              <router-link
                to="/sms/parents"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/parents') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'users']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Parents</span>
              </router-link>
            </ul>

            <p
              class="mt-6 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
              :class="isDrawerCollapsed ? 'opacity-0' : 'opacity-100'"
            >
              Academics
            </p>
            <ul class="mt-3 space-y-1">
              <router-link
                to="/sms/teachers"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/teachers') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'chalkboard-user']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Teachers</span>
              </router-link>
              <li>
                <button
                  type="button"
                  class="flex w-full items-center rounded-lg px-3 py-2"
                  :class="[
                    isDrawerCollapsed ? 'justify-center' : 'gap-3',
                    isLibraryOpen ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                  ]"
                  @click="toggleLibrary"
                >
                  <font-awesome-icon :icon="['fas', 'book-open']" class="text-xs" />
                  <span :class="isDrawerCollapsed ? 'sr-only' : ''">Library</span>
                  <font-awesome-icon
                    v-if="!isDrawerCollapsed"
                    :icon="isLibraryOpen ? ['fas', 'angle-down'] : ['fas', 'angle-right']"
                    class="ml-auto text-[10px] text-white/50"
                  />
                </button>
                <ul v-if="isLibraryOpen && !isDrawerCollapsed" class="mt-1 space-y-1 pl-8">
                  <router-link
                    to="/sms/library/all-books"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/library/all-books')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'book']" class="mr-2 text-[10px]" />
                    All Books
                  </router-link>
                  <router-link
                    to="/sms/library/add-new-book"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/library/add-new-book')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'book']" class="mr-2 text-[10px]" />
                    Add New Book
                  </router-link>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  class="flex w-full items-center rounded-lg px-3 py-2"
                  :class="[
                    isDrawerCollapsed ? 'justify-center' : 'gap-3',
                    isAccountOpen ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                  ]"
                  @click="toggleAccount"
                >
                  <font-awesome-icon :icon="['fas', 'wallet']" class="text-xs" />
                  <span :class="isDrawerCollapsed ? 'sr-only' : ''">Account</span>
                  <font-awesome-icon
                    v-if="!isDrawerCollapsed"
                    :icon="isAccountOpen ? ['fas', 'angle-down'] : ['fas', 'angle-right']"
                    class="ml-auto text-[10px] text-white/50"
                  />
                </button>
                <ul v-if="isAccountOpen && !isDrawerCollapsed" class="mt-1 space-y-1 pl-8">
                  <router-link
                    to="/sms/account/fees-collection"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/account/fees-collection')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'coins']" class="mr-2 text-[10px]" />
                    Fees Collection
                  </router-link>
                  <router-link
                    to="/sms/account/create-student-payment"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/account/create-student-payment')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'coins']" class="mr-2 text-[10px]" />
                    Creat Student Payment
                  </router-link>
                  <router-link
                    to="/sms/account/all-expenses"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/account/all-expenses')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'coins']" class="mr-2 text-[10px]" />
                    All Expenses
                  </router-link>
                  <router-link
                    to="/sms/account/add-new-student"
                    class="flex items-center rounded-lg px-3 py-2 text-xs"
                    :class="[
                      isLinkActive('/sms/account/add-new-student')
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/15',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'coins']" class="mr-2 text-[10px]" />
                    Add Expenses
                  </router-link>
                </ul>
              </li>
              <router-link
                to="/sms/class"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/class') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'school']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Class</span>
              </router-link>
              <router-link
                to="/sms/subject"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/subject') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'book']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Subject</span>
              </router-link>
              <router-link
                to="/sms/classroutine"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/classroutine') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'clipboard-check']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Class Routine</span>
              </router-link>
              <router-link
                to="/sms/attendance"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/attendance') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'clipboard-check']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Attendance</span>
              </router-link>
            </ul>

            <p
              class="mt-6 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
              :class="isDrawerCollapsed ? 'opacity-0' : 'opacity-100'"
            >
              Others
            </p>
            <ul class="mt-3 space-y-1">
              <router-link
                to="/sms/exam"
                class="flex cursor-pointer items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/exam') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'file-lines']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Exam</span>
              </router-link>
              <li
                class="flex cursor-pointer items-center rounded-lg px-3 py-2 text-white/70 hover:bg-white/15"
                :class="isDrawerCollapsed ? 'justify-center' : 'gap-3'"
              >
                <font-awesome-icon :icon="['fas', 'bus']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Transport</span>
              </li>
              <li
                class="flex cursor-pointer items-center rounded-lg px-3 py-2 text-white/70 hover:bg-white/15"
                :class="isDrawerCollapsed ? 'justify-center' : 'gap-3'"
              >
                <font-awesome-icon :icon="['fas', 'bed']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Hostel</span>
              </li>
              <router-link
                to="/sms/notice"
                class="flex items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/notice') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'bell']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Notice</span>
              </router-link>
              <router-link
                to="/sms/send-message"
                class="flex items-center rounded-lg px-3 py-2"
                :class="[
                  isDrawerCollapsed ? 'justify-center' : 'gap-3',
                  isLinkActive('/sms/send-message') ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/15',
                ]"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" class="text-xs" />
                <span :class="isDrawerCollapsed ? 'sr-only' : ''">Message</span>
              </router-link>
            </ul>
          </nav>
        </aside>

        <main class="sms-scroll h-[calc(100vh-4rem)] flex-1 overflow-y-auto px-6 py-6 text-slate-800">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isDrawerCollapsed = ref(false)
const route = useRoute()
const isAccountOpen = ref(false)
const isLibraryOpen = ref(false)

const isLinkActive = (path) => {
  if (isAccountOpen.value && !path.startsWith('/sms/account')) return false
  if (isLibraryOpen.value && !path.startsWith('/sms/library')) return false
  return route.path === path
}

const toggleAccount = () => {
  isAccountOpen.value = !isAccountOpen.value
}

const toggleLibrary = () => {
  isLibraryOpen.value = !isLibraryOpen.value
}

const toggleDrawer = () => {
  isDrawerCollapsed.value = !isDrawerCollapsed.value
}

let mediaQuery
const handleResize = (event) => {
  isDrawerCollapsed.value = event.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 768px)')
  isDrawerCollapsed.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleResize)
})

watch(
  () => route.path,
  (path) => {
    isAccountOpen.value = path.startsWith('/sms/account')
    isLibraryOpen.value = path.startsWith('/sms/library')
  },
)

onBeforeUnmount(() => {
  if (!mediaQuery) return
  mediaQuery.removeEventListener('change', handleResize)
})
</script>
