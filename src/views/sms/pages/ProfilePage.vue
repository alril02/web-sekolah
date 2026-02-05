<template>
  <div class="min-h-[calc(100vh-4rem)] bg-[#f4f6f9] px-6 py-6 text-slate-700">
    <div class="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
      <span class="font-semibold text-slate-400">Home</span>
      <span>-</span>
      <span class="font-semibold text-slate-700">Account Setting</span>
    </div>

    <div class="flex items-start gap-6">
      <section class="w-[280px] shrink-0 rounded-sm border border-slate-200 bg-white p-4 shadow-sm">
        <div class="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 class="text-xs font-semibold text-slate-800">Account Setting</h2>
          <div class="flex items-center gap-2">
            <button class="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-200 text-[9px] text-emerald-600">
              ✓
            </button>
            <button class="flex h-4 w-4 items-center justify-center rounded-full border border-red-200 text-[9px] text-red-500">
              ✕
            </button>
          </div>
        </div>

        <form class="space-y-4">
          <div>
            <label class="text-[11px] font-semibold text-slate-500">First Name</label>
            <input type="text" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Last Name</label>
            <input type="text" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Address</label>
            <input type="text" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Phone</label>
            <input type="tel" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">E-mail</label>
            <input type="email" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">School Code</label>
            <input type="text" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Session</label>
            <input type="text" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Language</label>
            <select class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs text-slate-600 focus:border-amber-400 focus:outline-none">
              <option>English</option>
              <option>Indonesia</option>
            </select>
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Joining Date</label>
            <input type="date" class="mt-2 h-8 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs text-slate-600 focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label class="text-[11px] font-semibold text-slate-500">Upload Student Photo (150px x 150px)</label>
            <input type="file" class="mt-2 w-full text-[11px] text-slate-500" />
          </div>
          <div class="flex items-center gap-3 pt-2">
            <button type="button" class="rounded-sm bg-amber-400 px-4 py-2 text-[11px] font-semibold text-white">
              Update
            </button>
            <button type="button" class="rounded-sm bg-[#0b2b5b] px-4 py-2 text-[11px] font-semibold text-white">
              Reset
            </button>
          </div>
        </form>
      </section>

      <section class="min-w-0 flex-1 rounded-sm border border-slate-200 bg-white p-4 shadow-sm">
        <div class="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 class="text-xs font-semibold text-slate-800">User Profile</h2>
          <div class="flex items-center gap-2">
            <button class="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-200 text-[9px] text-emerald-600">
              ✓
            </button>
            <button class="flex h-4 w-4 items-center justify-center rounded-full border border-red-200 text-[9px] text-red-500">
              ✕
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-6">
          <div class="flex h-32 w-32 items-center justify-center rounded-sm bg-slate-100">
            <img :src="avatarUrl" alt="User avatar" class="h-28 w-28 object-contain" />
          </div>
          <div class="grid flex-1 gap-y-3 text-[11px] text-slate-500 md:grid-cols-[120px,1fr]">
            <span class="font-semibold text-slate-600">Name :</span>
            <span class="text-slate-700">Kazi Fahimur Rahman</span>
            <span class="font-semibold text-slate-600">Gender :</span>
            <span class="text-slate-700">Male</span>
            <span class="font-semibold text-slate-600">Address :</span>
            <span class="text-slate-700">TA-107 Street, Banks Town, Sydney</span>
            <span class="font-semibold text-slate-600">Phone :</span>
            <span class="text-slate-700">+00950680</span>
            <span class="font-semibold text-slate-600">E-mail :</span>
            <span class="text-slate-700">kazifahim93@gmail.com</span>
            <span class="font-semibold text-slate-600">School Code :</span>
            <span class="text-slate-700">2456464</span>
            <span class="font-semibold text-slate-600">Session :</span>
            <span class="text-slate-700">2017-2018</span>
            <span class="font-semibold text-slate-600">Language :</span>
            <span class="text-slate-700">English</span>
            <span class="font-semibold text-slate-600">Joining Date :</span>
            <span class="text-slate-700">05/04/2016</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const avatarList = [
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime1',
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime2',
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime3',
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime4',
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime5',
  'https://api.dicebear.com/7.x/avataaars/png?seed=anime6',
]

const avatarUrl = ref(avatarList[Math.floor(Math.random() * avatarList.length)])
</script>
