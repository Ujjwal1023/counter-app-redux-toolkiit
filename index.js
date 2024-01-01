import store from "./redux/app/store.js";
import {increase,decrease,reset} from "./redux/features/counter/counterSlice.js";

console.log("initial value",store.getState());

console.log("dispatching increase");
store.dispatch(increase(5));
console.log("current value 1",store.getState());

store.dispatch(increase());
console.log("current value 2" ,store.getState());

console.log("dispatching decrease");
store.dispatch(decrease());
console.log("current value 3",store.getState());

console.log("dispatching reset");
store.dispatch(reset());
