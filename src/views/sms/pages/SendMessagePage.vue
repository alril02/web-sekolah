<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Message</span>
    </div>

    <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <section class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold text-slate-700">Write New Message</h2>
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
          </div>
        </div>

        <div class="mt-4 space-y-4 text-sm text-slate-600">
          <label class="block">
            <span class="text-xs text-slate-500">Title</span>
            <input
              type="text"
              placeholder="Title"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Recipient</span>
            <select
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
            >
              <option value="">Select recipient</option>
              <option>All Students</option>
              <option>All Teachers</option>
              <option>Parents</option>
              <option>Staff</option>
            </select>
          </label>

          <div class="rounded-lg border border-slate-200 bg-slate-50 p-2">
            <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2 text-xs text-slate-500">
              <span class="rounded border border-slate-200 bg-white px-2 py-1">Open Sans</span>
              <span class="rounded border border-slate-200 bg-white px-2 py-1">14</span>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">Bold</button>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">Italic</button>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">Underline</button>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">≡</button>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">≣</button>
              <button class="rounded border border-slate-200 bg-white px-2 py-1">⋯</button>
            </div>
            <textarea
              rows="7"
              placeholder="Message"
              class="mt-3 w-full resize-none bg-transparent px-2 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
            ></textarea>
          </div>

          <button class="mt-2 rounded-lg bg-[#facc15] px-4 py-2 text-sm font-semibold text-slate-900">
            Send Message
          </button>
        </div>
      </section>

      <aside class="space-y-6">
        <section class="rounded-xl bg-white p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-slate-700">Successful Message</h3>
            <div class="flex items-center gap-2 text-sm text-slate-400">
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
            </div>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✔</div>
            <p class="text-xs text-slate-500">Successfully Upload Your Product</p>
          </div>
        </section>

        <section class="rounded-xl bg-white p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-slate-700">Error Message</h3>
            <div class="flex items-center gap-2 text-sm text-slate-400">
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
              <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
            </div>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">⦿</div>
            <p class="text-xs text-slate-500">Some Field Required Here</p>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>
