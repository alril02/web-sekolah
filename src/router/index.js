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
      ],
    },
  ],
})

export default router
