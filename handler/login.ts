import serializeToken from './authentication/serializeToken'

const credentials = {
  username: 'Alpha1',
  password: 'BetaDelta'
}

const loginHandler = (username: string, password: string):Promise<string> => {
  if (username === credentials.username && password === credentials.password) {
    return serializeToken({username})
  } else {
    return new Promise((res, rej) => rej('Login Failed'))
  }
}

export default loginHandler
