<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-slate-900/40 p-4"
    >
      <div class="absolute inset-0" @click="emitClose"></div>
      <transition name="scale">
        <div
          v-show="modelValue"
          class="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">Form</p>
              <h3 class="text-lg font-semibold text-slate-800">Edit User</h3>
            </div>
            <div class="flex items-center gap-2">
              <button
                class="h-9 w-9 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100"
                aria-label="Close"
                @click="emitClose"
              >
                ✕
              </button>
            </div>
          </div>

          <form class="grid gap-4 p-6 text-sm text-slate-600" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <label class="text-xs font-semibold text-slate-500">Nama</label>
              <input
                type="text"
                :value="user?.name || ''"
                disabled
                class="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-slate-500"
              />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-semibold text-slate-500">Email</label>
              <input
                type="email"
                placeholder="nama@sekolah.id"
                v-model="form.email"
                class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
              />
            </div>
            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Password Baru</label>
                <input
                  type="password"
                  placeholder="Kosongkan jika tidak diubah"
                  v-model="form.password"
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Konfirmasi Password</label>
                <input
                  type="password"
                  placeholder="Ulangi password baru"
                  v-model="form.confirmPassword"
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                />
              </div>
            </div>

            <p
              v-if="errorMessage"
              class="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-600"
            >
              {{ errorMessage }}
            </p>
            <p
              v-if="successMessage"
              class="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-600"
            >
              {{ successMessage }}
            </p>
          </form>

          <div class="flex items-center gap-3 border-t border-slate-100 px-6 py-4">
            <button
              type="submit"
              class="rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
              :disabled="isSubmitting"
              @click="handleSubmit"
            >
              {{ isSubmitting ? 'Menyimpan...' : 'Simpan' }}
            </button>
            <button
              class="rounded-md bg-[#1e3a8a] px-6 py-2 text-xs font-semibold uppercase text-white"
              @click.prevent="emitClose"
            >
              Tutup
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:modelValue', 'updated'])

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const isSubmitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

watch(
  () => props.user,
  (value) => {
    form.email = value?.email || ''
    form.password = ''
    form.confirmPassword = ''
    errorMessage.value = ''
    successMessage.value = ''
  },
  { immediate: true }
)

const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!props.user?.id) {
    errorMessage.value = 'User tidak valid.'
    return
  }

  const hasEmailChange = form.email && form.email !== props.user?.email
  const hasPasswordChange = form.password.length > 0

  if (!hasEmailChange && !hasPasswordChange) {
    errorMessage.value = 'Tidak ada perubahan untuk disimpan.'
    return
  }

  if (hasPasswordChange && form.password !== form.confirmPassword) {
    errorMessage.value = 'Konfirmasi password tidak sama.'
    return
  }

  isSubmitting.value = true

  try {
    const payload = {}
    if (hasEmailChange) payload.email = form.email
    if (hasPasswordChange) payload.password = form.password

    const response = await fetch(`${API_BASE_URL}/users/${props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData?.message || 'Gagal memperbarui user.')
    }

    const data = await response.json()
    successMessage.value = 'User berhasil diperbarui.'
    emit('updated', data)
    emitClose()
  } catch (error) {
    errorMessage.value = error?.message || 'Gagal memperbarui user.'
  } finally {
    isSubmitting.value = false
  }
}

const emitClose = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
