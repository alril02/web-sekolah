<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Add Expenses</span>
    </div>

    <section class="rounded-xl bg-white shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">Add New Expenses</h2>
          <p class="text-xs text-slate-400">Create a new expense record</p>
        </div>
        <div class="flex items-center gap-2 text-slate-400">
          <button class="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">↻</button>
          <button class="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">✕</button>
        </div>
      </div>

      <form class="grid gap-4 px-6 py-6 text-sm text-slate-600 lg:grid-cols-4">
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Name</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">ID</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Expense Type</label>
          <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <option value="">Select Type</option>
            <option>Salary</option>
            <option>Utility</option>
            <option>Transport</option>
            <option>Stationary</option>
          </select>
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Amount</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>

        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Phone</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">E-mail</label>
          <input type="email" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Status</label>
          <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <option value="">Select Status</option>
            <option>Paid</option>
            <option>Due</option>
          </select>
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Date</label>
          <input type="text" placeholder="dd / mm / yyyy" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>

        <div class="col-span-full flex gap-3 pt-2">
          <button type="button" class="rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white">Save</button>
          <button type="reset" class="rounded-md bg-[#1e3a8a] px-6 py-2 text-xs font-semibold uppercase text-white">Reset</button>
        </div>
      </form>
    </section>
  </div>
</template>
