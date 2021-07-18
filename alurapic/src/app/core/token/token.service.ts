import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({ providedIn: 'root'})
export class TokenService{

	/* !! se existir retorna true se não false */
	hasToken(){
		return !!this.getToken();
	}
	setToken(token){
		window.localStorage.setItem(KEY, token);
	}

	getToken(){
		return window.localStorage.getItem(KEY);
	}

	removeToken(){
		window.localStorage.removeItem(KEY);
	}
}