import store from '../store/RootStore'

export default function useData (){
  return store.fetchStore.data
}