import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { user_data } from '../store/app'

export function useAuth(){
    const router = useRouter()

    onMounted(async () => {
        if (!user_data?.value)
            router.replace('login')
    })
}