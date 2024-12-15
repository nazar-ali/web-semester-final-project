// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { SignupProps } from '../../app/shared/models/SignUp';
// @Injectable({
//   providedIn: 'root',
// })
// export class SignUpService {
//   private apiUrl = 'http://localhost:3000';
//   constructor(private http: HttpClient) {}

//   signUpResponse(): Observable<SignupProps[]> {
//     return this.http.get<SignupProps[]>(`${this.apiUrl}/signup`);
//   }

//   createSignup(item: SignupProps): Observable<SignupProps> {
//     return this.http.post<SignupProps>(this.apiUrl, item);
//   }
// }
