import api from './common';

export default {
  getResult: async req => {
    return await api.send('get/result', req, 'post');
  },
  getCompanyList: async req => {
    return await api.send('get/company/list', req, 'post');
  },
};
