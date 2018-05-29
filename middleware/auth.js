export default function ({store, redirect}) {
    if (!store.getters['admin/checkAdmin']) {
        return redirect('/signin')
    }
}
