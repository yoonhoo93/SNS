/* 전역상태 생성 */
import { create } from 'zustand'
import { combine, persist, subscribeWithSelector, createJSONStorage, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

/* type Store = {
  count: number
  actions: {
    increase: () => void
    decrease: () => void
  }
} */

/*
    함수를 하나씩 불러온다.
    export const useCountStore = create<Store>((set) => ({
    count: 0,
    increase: () => {

        //값 가지고오는법
        const count = get().count;
        // 일반 값 업데이트
        set({ count: count + 1 })


        //일반적으로 함수형태로 많이 씀
        set((store) => ({
            count: store.count + 1
        }))
    },
    decrease: () => {
        set((store) => ({
            count: store.count - 1
        }))
    }
})) */

/* export const useCountStore = create<Store>((set) => ({
    count: 0,
    actions: {
        increase: () => {
            set((store) => ({
                count: store.count + 1
            }))
        },
        decrease: () => {
            set((store) => ({
                count: store.count - 1
            }))
        }
    }

})) */

// 타입을 알아서 추론해주기때문에 많이 사용한다.
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set) => ({
            actions: {
              increase: () => {
                set((store) => {
                  store.count += 1
                })
              },
              decrease: () => {
                set((store) => {
                  store.count -= 1
                })
              }
            }
          }))
        )),
      {
        name: "countStore", // persist 미들웨어 옵션 로컬스토리지에 저장해준다.
        partialize: (state) => ({ // 어떤값을 저장할지지정
          count: state.count
        }),
        storage: createJSONStorage(() => sessionStorage) // 세션스토리지에 저장되게한다.
      },

    ), {
    name: "countStore"
  }
  )
)
/* 현재 업데이트 된 값과 이전에 값을 같이 볼수있다. */
useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount)
  }
)