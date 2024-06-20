import { createServer } from 'miragejs'
import { signInUserData } from './data/authData'
import authFakeApi from './fakeApi/authFakeApi'


const apiPrefix = "/api"

export function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                signInUserData,
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                const isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()

            authFakeApi(this, apiPrefix)
        },
    })
}
