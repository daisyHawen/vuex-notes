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
			text: '这是内容',
			favorite: false,
			header: '这是标题'
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
		console.log(note);
		state.activeNote = note;
	}

}
const actions = {
	updateActiveNote: ({
		commit
	}, note) => {
		commit('SET_ACTIVE_NOTE', note)
	},
	addNote: ({
		commit
	}) => {
		commit('ADD_NOTE')
	},
	deleteNote: ({
		commit
	}, note) => {
		console.log(note);
		commit('DELETE_NOTE', note)
	},
	toggleFavorite: ({
		commit
	}) => {
		commit('TOGGLE_FAVORTE')
	}
}
const getters = {
	notes: state => state.notes,
	activeNote: state => state.activeNote
}

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});

//事件分发
// const actions = {
// 	addNote({
// 		dispatch
// 	}) {
// 		dispatch('ADD_NOTE')
// 	},
// 	editNote({
// 		dispatch
// 	}, e) {
// 		dispatch('EDIT_NOTE', e.target.value)
// 	},
// 	deleteNote({
// 		dispatch
// 	}) {
// 		dispatch('DELETE_NOTE')
// 	},
// 	toggleFavorite({
// 		dispatch
// 	}) {
// 		dispatch('TOGGLE_FAVORTE')
// 	},
// 	updateActive({
// 		dispatch
// 	}) {
// 		dispatch('SET_ACTIVE_NOTE', note)
// 	}
// }
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