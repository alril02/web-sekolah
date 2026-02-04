<template>
  <div class="space-y-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Admin</span>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">👥</div>
        <div>
          <p class="text-xs text-slate-400">Students</p>
          <p class="text-2xl font-semibold">50,000</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🧑‍🏫</div>
        <div>
          <p class="text-xs text-slate-400">Teachers</p>
          <p class="text-2xl font-semibold">10,000</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">👨‍👩‍👧‍👦</div>
        <div>
          <p class="text-xs text-slate-400">Parents</p>
          <p class="text-2xl font-semibold">15,000</p>
        </div>
      </div>
      <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">💰</div>
        <div>
          <p class="text-xs text-slate-400">Total Earnings</p>
          <p class="text-2xl font-semibold">$30,000</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Fees Collection &amp; Expenses</p>
            <h3 class="mt-2 text-lg font-semibold text-slate-700">Overview</h3>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <button class="cursor-pointer rounded-full border border-slate-200 px-2 py-1 text-xs">Week</button>
            <button class="cursor-pointer rounded-full border border-slate-200 px-2 py-1 text-xs">Month</button>
            <button class="cursor-pointer rounded-full border border-slate-200 px-2 py-1 text-xs">Year</button>
          </div>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-lg border border-slate-100 p-4">
            <p class="text-xs text-slate-400">Collections</p>
            <p class="mt-2 text-lg font-semibold text-slate-700">$10,000</p>
          </div>
          <div class="rounded-lg border border-slate-100 p-4">
            <p class="text-xs text-slate-400">Fees</p>
            <p class="mt-2 text-lg font-semibold text-slate-700">$8,000</p>
          </div>
          <div class="rounded-lg border border-slate-100 p-4">
            <p class="text-xs text-slate-400">Expenses</p>
            <p class="mt-2 text-lg font-semibold text-slate-700">$5,000</p>
          </div>
        </div>
        <div class="mt-6 h-56 rounded-xl bg-linear-to-t from-blue-50 to-white"></div>
      </div>

      <div class="grid gap-4">
        <div class="rounded-xl bg-[#3b5998] p-5 text-white shadow-sm">
          <p class="text-xs uppercase tracking-[0.2em] text-white/70">Like us on Facebook</p>
          <p class="mt-4 text-3xl font-semibold">30,000</p>
        </div>
        <div class="rounded-xl bg-[#1da1f2] p-5 text-white shadow-sm">
          <p class="text-xs uppercase tracking-[0.2em] text-white/70">Follow us on Twitter</p>
          <p class="mt-4 text-3xl font-semibold">13,000</p>
        </div>
        <div class="rounded-xl bg-[#db4437] p-5 text-white shadow-sm">
          <p class="text-xs uppercase tracking-[0.2em] text-white/70">Follow us on Google Plus</p>
          <p class="mt-4 text-3xl font-semibold">9,000</p>
        </div>
        <div class="rounded-xl bg-[#0077b5] p-5 text-white shadow-sm">
          <p class="text-xs uppercase tracking-[0.2em] text-white/70">Follow us on Linkedin</p>
          <p class="mt-4 text-3xl font-semibold">18,000</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[2fr_1fr_1fr]">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-700">Event Calendar</h3>
          <span class="text-xs text-slate-400">14 April, 2017</span>
        </div>
        <div class="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-400">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div class="mt-3 grid grid-cols-7 gap-2 text-center text-sm">
          <span class="rounded-md bg-slate-100 py-2">1</span>
          <span class="rounded-md bg-slate-100 py-2">2</span>
          <span class="rounded-md bg-slate-100 py-2">3</span>
          <span class="rounded-md bg-slate-100 py-2">4</span>
          <span class="rounded-md bg-slate-100 py-2">5</span>
          <span class="rounded-md bg-slate-100 py-2">6</span>
          <span class="rounded-md bg-slate-100 py-2">7</span>
          <span class="rounded-md bg-slate-100 py-2">8</span>
          <span class="rounded-md bg-slate-100 py-2">9</span>
          <span class="rounded-md bg-slate-100 py-2">10</span>
          <span class="rounded-md bg-slate-100 py-2">11</span>
          <span class="rounded-md bg-slate-100 py-2">12</span>
          <span class="rounded-md bg-indigo-500 py-2 text-white">13</span>
          <span class="rounded-md bg-slate-100 py-2">14</span>
          <span class="rounded-md bg-slate-100 py-2">15</span>
          <span class="rounded-md bg-slate-100 py-2">16</span>
          <span class="rounded-md bg-emerald-500 py-2 text-white">17</span>
          <span class="rounded-md bg-slate-100 py-2">18</span>
          <span class="rounded-md bg-slate-100 py-2">19</span>
          <span class="rounded-md bg-slate-100 py-2">20</span>
          <span class="rounded-md bg-slate-100 py-2">21</span>
          <span class="rounded-md bg-slate-100 py-2">22</span>
          <span class="rounded-md bg-slate-100 py-2">23</span>
          <span class="rounded-md bg-rose-500 py-2 text-white">24</span>
          <span class="rounded-md bg-slate-100 py-2">25</span>
          <span class="rounded-md bg-slate-100 py-2">26</span>
          <span class="rounded-md bg-slate-100 py-2">27</span>
          <span class="rounded-md bg-slate-100 py-2">28</span>
          <span class="rounded-md bg-slate-100 py-2">29</span>
          <span class="rounded-md bg-slate-100 py-2">30</span>
          <span class="rounded-md bg-slate-100 py-2">31</span>
        </div>
      </div>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-700">Notice Board</h3>
          <span class="text-xs text-slate-400">May 16, 2017</span>
        </div>
        <div class="mt-4 space-y-4 text-sm text-slate-600">
          <div>
            <p class="font-semibold text-slate-700">Jennyfer Lopez</p>
            <p class="text-xs text-slate-400">5 min ago</p>
            <p class="mt-2 text-sm">Great School management simply dummy text of the printing.</p>
          </div>
          <div>
            <p class="font-semibold text-slate-700">Killer Miller</p>
            <p class="text-xs text-slate-400">10 min ago</p>
            <p class="mt-2 text-sm">Great School management simply dummy text of the printing.</p>
          </div>
          <div>
            <p class="font-semibold text-slate-700">Jennyfer Lopez</p>
            <p class="text-xs text-slate-400">15 min ago</p>
            <p class="mt-2 text-sm">Great School management simply dummy text of the printing.</p>
          </div>
        </div>
      </div>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-700">Recent Activities</h3>
          <span class="text-xs text-slate-400">Today</span>
        </div>
        <ul class="mt-4 space-y-4 text-sm text-slate-600">
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
            <div>
              <p>You followed Olivia Williamson</p>
              <p class="text-xs text-slate-400">9 minutes ago</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-amber-500"></span>
            <div>
              <p>You subscribed to Harold Fuller</p>
              <p class="text-xs text-slate-400">20 minutes ago</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
            <div>
              <p>You updated your profile picture</p>
              <p class="text-xs text-slate-400">30 minutes ago</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
            <div>
              <p>You deleted homepage.psd</p>
              <p class="text-xs text-slate-400">35 minutes ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
