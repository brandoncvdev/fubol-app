import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    AngularFirestoreCollection,
    AngularFirestore,
    DocumentReference,
    DocumentData,
} from '@angular/fire/compat/firestore';

export interface Goal {
    type: string;
    time: string;
    amount: number;
    notes?: string;
    eventId?: string;
}

@Injectable({
    providedIn: 'root',
})
export class GoalsService {
    //bookingRef: AngularFireObject<any>;
    public goalsCollectionRef: AngularFirestoreCollection<Goal>;
    public goals: Observable<Goal[]>;

    constructor(private firestore: AngularFirestore) {
        this.goalsCollectionRef = this.firestore.collection('goals');
        this.goals = this.goalsCollectionRef.valueChanges({
            idField: 'eventId',
        });
    }

    //Get List
    public getListGoals(): Observable<Goal[]> {
        return this.goals;
    }

    //Create
    public createGoal(data: Goal): Promise<DocumentReference<Goal>> {
        return this.goalsCollectionRef.add(data);
    }

    public getGoal(id: string): Observable<any> {
        const ref = this.firestore.collection('goals').doc(id);
        const doc = ref.valueChanges();
        return doc;
    }

    public deleteRule(id: string): Promise<any> {
        return this.goalsCollectionRef.doc(id).delete();
    }
}
