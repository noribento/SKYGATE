export default function({ store, redirect }) {
  if (!store.state.visited) {
    return redirect('/')
  }
}
