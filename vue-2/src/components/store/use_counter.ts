import{defineStore} from 'pinia'
export const useCounterStore1 =defineStore("main",{
    state:()=>({
        counter:0,
        name:"erik"
    }),
    getters:{
        doubleCount:(state)=>{
            state.counter * 2;
        }
    },
    actions:{
        reset(){
            this.counter=0;
        },
        addOne(){
            this.counter++;
        },
        minusOne(){
            this.counter--;
        },
        doubleNum(){
            this.counter **2;
        }
    }
})