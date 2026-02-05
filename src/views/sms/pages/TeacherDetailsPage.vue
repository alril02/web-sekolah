<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Teacher Details</span>
    </div>

    <section class="flex-1 rounded-xl bg-white shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">About {{ teacher.name }}</h2>
          <p class="text-xs text-slate-400">Teacher profile information</p>
        </div>
        <div class="flex items-center gap-2 text-slate-400">
          <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
            <font-awesome-icon :icon="['fas', 'print']" class="text-xs" />
          </button>
          <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
            <font-awesome-icon :icon="['fas', 'download']" class="text-xs" />
          </button>
          <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
            <font-awesome-icon :icon="['fas', 'pen-to-square']" class="text-xs" />
          </button>
          <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">↻</button>
          <button
            class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200"
            type="button"
            @click="goBack"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="grid gap-8 px-6 py-6 lg:grid-cols-[260px_1fr]">
        <div class="flex items-start justify-center">
          <div class="h-60 w-60 overflow-hidden rounded-md bg-slate-200">
            <img :src="teacher.photo" :alt="teacher.name" class="h-full w-full object-cover" />
          </div>
        </div>

        <div class="grid gap-3 text-sm text-slate-600">
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Name :</span>
            <span class="text-slate-700">{{ teacher.name }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Gender :</span>
            <span>{{ teacher.gender }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Date Of Birth :</span>
            <span>{{ teacher.dob }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Religion :</span>
            <span>{{ teacher.religion }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">E-mail :</span>
            <span>{{ teacher.email }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Joining Date :</span>
            <span>{{ teacher.joiningDate }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Subject :</span>
            <span>{{ teacher.subject }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Class :</span>
            <span>{{ teacher.className }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Section :</span>
            <span>{{ teacher.section }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">ID :</span>
            <span>{{ teacher.id }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Adress :</span>
            <span>{{ teacher.address }}</span>
          </div>
          <div class="flex gap-3">
            <span class="w-32 text-xs font-semibold text-slate-400">Phone :</span>
            <span>{{ teacher.mobile }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.push('/sms/teachers')
}

const teachers = [
  {
    id: '2901',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    religion: 'Christian',
    joiningDate: '15/06/2015',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2902',
    name: 'Kazi Fahim',
    gender: 'Male',
    subject: 'English',
    className: '2',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    religion: 'Muslim',
    joiningDate: '20/07/2016',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2903',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Finance',
    className: '1',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2904',
    name: 'Ricki Rozario',
    gender: 'Male',
    subject: 'Religion',
    className: '3',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Hindu',
    joiningDate: '18/09/2018',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2905',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '4',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2906',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Social Science',
    className: '8',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2907',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Bangla',
    className: '1',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2908',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '2',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2909',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '5',
    section: 'D',
    address: '110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2910',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2911',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Finance',
    className: '6',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2912',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2913',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '3',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2914',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Bangla',
    className: '1',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2915',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '4',
    section: 'E',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2916',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Social',
    className: '3',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2917',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    religion: 'Christian',
    joiningDate: '12/05/2014',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
]

const teacher = computed(() => {
  const match = teachers.find((item) => item.id === route.params.id)
  const fallback = teachers[0]
  const base = match || fallback
  return {
    ...base,
    religion: base.religion || '-',
    joiningDate: base.joiningDate || '-',
  }
})
</script>
