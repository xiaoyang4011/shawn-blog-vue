import { UserResource } from './resources'

export default {
  getList: function (page) {
    return UserResource.get({page:page})
  }
}
