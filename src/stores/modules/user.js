import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'
export const useUserStore = defineStore(
  'news-user',
  () => {
    //数据
    const token = ref('')

    const user = ref({})
    //方法
    const setToken = (t) => (token.value = t)

    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }

    const setUser = (obj) => (user.value = obj)
    return {
      token,
      setToken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
