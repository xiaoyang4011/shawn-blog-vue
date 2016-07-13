import { UserResource } from './resources'

export default {
  getList: function (limit) {
    return UserResource.get({limit:limit})
  }
}
