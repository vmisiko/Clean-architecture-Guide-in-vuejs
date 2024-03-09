import { createRouter, createWebHistory } from 'vue-router'
import useAUthState from '@/presentation/bloc/auth/authState';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: () => import('@/presentation/layouts/AuthLayout.vue'),
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: 'login',
          name: 'AuthLogin',
          component: () => import('@/presentation/modules/auth/login.vue'),
          meta: {
            requiresAuth: false,
          }
        },
        {
          path: 'register',
          name: 'AuthRegister',
          component: () => import('@/presentation/modules/auth/register.vue'),
          meta: {
            requiresAuth: false,
          }
        },
        {
          path: 'reset-password/:token',
          name: 'AuthResetPassoword',
          component: () => import('@/presentation/modules/auth/ResetPassword.vue'),
          meta: {
            requiresAuth: false,
          }
        },
        {
          path: 'forgot-password',
          name: 'AuthForgotPassoword',
          component: () => import('@/presentation/modules/auth/ForgotPassword.vue'),
          meta: {
            requiresAuth: false,
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/presentation/NotFound.vue'),
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAUthState();
  const auth = dependencyLocator.provideAuthPloc();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    store.initAuth();
    if (store.isAuthenticated) {
      auth.fetchUserPermissions(store.userData?.user_id as Number);

      if (to.matched.some((record) => record.meta?.permission && !auth.can(record.meta.permission as string))) {
        next('/access-denied');
        return;
      }
      next();
      return;
    }
    next('/auth/login');
  } else {
    next();
  }
});
export default router
