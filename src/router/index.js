import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homepage/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue'),
    },
    {
      path: '/sms',
      name: 'sms',
      component: () => import('../views/sms/SMSLayout.vue'),
      children: [
        {
          path: '',
          name: 'sms-index',
          component: () => import('../views/sms/pages/IndexPage.vue'),
        },
        {
          path: 'students',
          name: 'sms-all-students',
          component: () => import('../views/sms/pages/AllStudentsPage.vue'),
        },
        {
          path: 'teachers',
          name: 'sms-all-teachers',
          component: () => import('../views/sms/pages/TeacherPage.vue'),
        },
        {
          path: 'parents',
          name: 'sms-all-parents',
          component: () => import('../views/sms/pages/AllParentsPage.vue'),
        },
        {
          path: 'classes',
          name: 'sms-all-classes',
          component: () => import('../views/sms/pages/AllClassPage.vue'),
        },
        {
          path: 'subjects',
          name: 'sms-subjects',
          component: () => import('../views/sms/pages/SubjectPage.vue'),
        },
        {
          path: 'class-routine',
          name: 'sms-class-routine',
          component: () => import('../views/sms/pages/ClassRoutinePage.vue'),
        },
        {
          path: 'attendance',
          name: 'sms-attendance',
          component: () => import('../views/sms/pages/AttendancePage.vue'),
        },
      ],
    },
  ],
})

export default router
