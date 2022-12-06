import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Note } from '../models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
  private readonly API_URL = 'http://localhost:8000/notes'
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API_URL)
  }
}