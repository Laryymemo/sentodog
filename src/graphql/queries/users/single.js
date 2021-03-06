import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import User from '../../../models/users'
import {UserType} from '../../types/users'

const querySingleUsers = {
  type: UserType,
  args:{
    id:{
      name:'ID',
      type:GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root,params){
    const user = User.findById(params.id).exec()
    return user
  }
}

export default querySingleUsers;
