// let app = require("../plugins/rest-api")
export default function({ store, redirect }) {
    if (!store.getters['admin/checkAdmin']) {
        //   app.default.Rest.api('isAuthUser')
        //   .then(res=>{console.log(res)})
        return redirect('/signin')
    }
}
