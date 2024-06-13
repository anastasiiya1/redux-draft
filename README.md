1. !! оголосити store 1раз на весь додаток !!
2. оголосити стан
3. використати стан jsx
4. оголосити action
5. відправити action при події
6. обробити action в reducer




redux toolkit

map, filter, ... + return || state.items = state.items.map(.....)
builder.addCase( або мутація, або повернення)

slice = reducer+action


reducers: {
	changeLang: {
		reducer: (state, action) => {
			state.lang = action.payload.value;
		},
		prepare: (value) => {
			return {
				payload: {
					value,
					time: Date.now(),
				}
			}
		}
	}
}


Redux persist (запис стану редакс)