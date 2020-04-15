/* eslint-disable */
import router from '@/router';

const actions = {
  async login({ dispatch }, { valid, user }) {
    if (valid) {
      dispatch(
        'auth/authenticate',
        {
          strategy: 'local',
          ...user,
        },
        { root: true },
      )
        .then(async () => {
          router.push('/dashboard');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
