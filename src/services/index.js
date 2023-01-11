import { createUserService } from './UserService'
import { createContentService } from './ContentService'

const userService = createUserService()
const contentService = createContentService()

// eslint-disable-next-line import/prefer-default-export
export { userService, contentService }
