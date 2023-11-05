import { myRequest } from '..'

export function getBanner() {
  return myRequest.get({
    url: '/banner/'
  })
}
