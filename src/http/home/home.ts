import { myRequest } from '..'

export function getBanner() {
  return myRequest.get({
    url: '/banner/'
  })
}

export function getNavHeader() {
  return myRequest.get({
    url: '/navheader/'
  })
}