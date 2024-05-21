import Pusher from 'pusher-js'

export const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_CLUSTER,
  forceTLS: true
})
