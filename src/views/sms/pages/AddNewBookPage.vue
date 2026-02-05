<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Add New Book</span>
    </div>

    <section class="rounded-xl bg-white shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">Book Information</h2>
          <p class="text-xs text-slate-400">Create new library book</p>
        </div>
        <div class="flex items-center gap-2 text-slate-400">
          <button class="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">↻</button>
          <button class="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">✕</button>
        </div>
      </div>

      <form class="grid gap-4 px-6 py-6 text-sm text-slate-600 lg:grid-cols-4">
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Book Name</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Subject</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Writer Name</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Class</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>

        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Publishing Year</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">Upload Date</label>
          <input type="text" placeholder="dd / mm / yyyy" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-semibold text-slate-500">ID No</label>
          <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
        </div>

        <div class="col-span-full flex gap-3 pt-2">
          <button type="button" class="rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white">Save</button>
          <button type="reset" class="rounded-md bg-[#1e3a8a] px-6 py-2 text-xs font-semibold uppercase text-white">Reset</button>
        </div>
      </form>
    </section>
  </div>
</template>
