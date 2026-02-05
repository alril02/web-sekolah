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
          path: 'student-details/:roll',
          name: 'sms-student-details',
          component: () => import('../views/sms/pages/StudentDetails.vue'),
        },
        {
          path: 'parents',
          name: 'sms-all-parents',
          component: () => import('../views/sms/pages/AllParentsPage.vue'),
        },
        {
          path: 'teachers',
          name: 'sms-all-teachers',
          component: () => import('../views/sms/pages/TeacherPage.vue'),
        },
        {
          path: 'class',
          name: 'sms-class',
          component: () => import('../views/sms/pages/AllClassPage.vue'),
        },
        {
          path: 'profile',
          name: 'sms-profile',
          component: () => import('../views/sms/pages/ProfilePage.vue'),
        },
        {
          path: 'account',
          name: 'sms-account',
          component: () => import('../views/sms/pages/AccountPage.vue'),
        },
        {
          path: 'subject',
          name: 'sms-subject',
          component: () => import('../views/sms/pages/SubjectPage.vue'),
        },
        {
          path: 'attendance',
          name: 'sms-attendance',
          component: () => import('../views/sms/pages/AttendancePage.vue'),
        },
        {
          path: 'classroutine',
          name: 'sms-classroutine',
          component: () => import('../views/sms/pages/ClassRoutinePage.vue'),
        },
        {
          path: 'exam',
          name: 'sms-exam',
          component: () => import('../views/sms/pages/ExamPage.vue'),
        },
        {
          path: 'exam-grades',
          name: 'sms-exam-grades',
          component: () => import('../views/sms/pages/ExamGradesPage.vue'),
        },
        {
          path: 'notice',
          name: 'sms-notice',
          component: () => import('../views/sms/pages/NoticePage.vue'),
        },
        {
          path: 'send-message',
          name: 'sms-send-message',
          component: () => import('../views/sms/pages/SendMessagePage.vue'),
        },
      ],
    },
  ],
})

export default router
