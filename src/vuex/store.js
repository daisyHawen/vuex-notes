import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*定义数据*/
const state = {
	notes: [],
	activeNote: {}
};
/*定义方法*/
const mutations = {
	// 添加笔记
	ADD_NOTE: state => {
		const newNote = {
			text: 'new note',
			favorite: false,
			header: 'newNote'
		}
		state.notes.push(newNote),
			state.activeNote = newNote
	},
	//编辑笔记
	EDIT_NOTE: (state, text) => {
		state.activeNote.text = text;
	},
	//删除笔记
	DELETE_NOTE: (state) => {
		state.notes.$remove(state.activeNote);
		state.activeNote = state.notes[0];
	},
	//标记favorite
	TOGGLE_FAVORTE: (state) => {
		state.notes.favorite = !state.activeNote.favorite;
	},
	//设置活动笔记
	SET_ACTIVE_NOTE: (state, note) => {
		state.activeNote = note;
	}

}

const store = new Vuex.Store({
	state,
	mutations
});
// const store = new Vuex.Store({
// 	state: {
// 		count: 0,
// 		todos: [{
// 			id: 1,
// 			text: '...',
// 			done: true
// 		}, {
// 			id: 2,
// 			text: '...',
// 			done: false
// 		}]
// 	},
// 	getters: {
// 		doneTodos: state => {
// 			return state.todos.filter(todo => todo.done)
// 		},
// 		doneTodosCount: (state, getters) => {
// 			return getters.doneTodos.length;
// 		}

// 	},
// 	mutations: {
// 		increment(state) {
// 			console.log('increment');
// 			state.count++
// 		},
// 		decrement: state => state.count--
// 	},
// 	actions: {
// 		increment({
// 			commit
// 		}) {
// 			commit('increment')
// 		}
// 	}
// });
// store.commit('increment')
// store.dispatch('increment')
// console.log(store.getters.doneTodos);
// console.log(store.getters.doneTodosCount);

// console.log(store.state.count) 

export default store