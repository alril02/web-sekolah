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
      path: '/guru',
      name: 'guru',
      component: () => import('../views/role/GuruView.vue'),
    },
    {
      path: '/siswa',
      name: 'siswa',
      component: () => import('../views/role/SiswaView.vue'),
    },
    {
      path: '/ortu',
      name: 'ortu',
      component: () => import('../views/role/OrtuView.vue'),
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
          path: 'admin',
          name: 'sms-admin',
          component: () => import('../views/sms/pages/AdminPage.vue'),
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
          path: 'teachers/details/:id',
          name: 'sms-teacher-details',
          component: () => import('../views/sms/pages/TeacherDetailsPage.vue'),
        },
        {
          path: 'library/all-books',
          name: 'sms-library-all-books',
          component: () => import('../views/sms/pages/AllBooksPage.vue'),
        },
        {
          path: 'library/add-new-book',
          name: 'sms-library-add-new-book',
          component: () => import('../views/sms/pages/AddNewBookPage.vue'),
        },
        {
          path: 'class',
          name: 'sms-class',
          component: () => import('../views/sms/pages/AllClassPage.vue'),
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
          path: 'account',
          name: 'sms-account',
          redirect: '/sms/account/fees-collection',
        },
        {
          path: 'account/fees-collection',
          name: 'sms-account-fees-collection',
          component: () => import('../views/sms/pages/AccountPage.vue'),
        },
        {
          path: 'account/create-student-payment',
          name: 'sms-account-create-student-payment',
          component: () => import('../views/sms/pages/CreateStudentPaymentPage.vue'),
        },
        {
          path: 'account/all-expenses',
          name: 'sms-account-all-expenses',
          component: () => import('../views/sms/pages/AllExpensesPage.vue'),
        },
        {
          path: 'account/add-new-student',
          name: 'sms-account-add-new-student',
          component: () => import('../views/sms/pages/AddNewStudentPage.vue'),
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
