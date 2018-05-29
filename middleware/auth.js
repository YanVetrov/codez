export default function({ store, redirect}) {

    // app.rest.api('isAuthUser')
    //     .then(res => {console.log('isAuthUser',res)});
    if (!store.getters['admin/checkAdmin']) {
        return redirect('/signin')
    }
    // return redirect('/dashboard')


}
