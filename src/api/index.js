import { UserResource } from './resources'

export default {
  getUsers: function () {
    return UserResource.get({id:'getList'})
  }
}
