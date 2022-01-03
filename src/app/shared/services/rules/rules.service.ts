import { Injectable } from '@angular/core';
import {
    AngularFirestoreCollection,
    AngularFirestore,
    DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface Rule {
    team: number;
    event: number;
    amount: number;
    eventId?: string;
    idDoc?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RulesService {
    public rulesCollectionRef: AngularFirestoreCollection<Rule>;
    public rules: Observable<Rule[]>;

    constructor(private firestore: AngularFirestore) {
        this.rulesCollectionRef = this.firestore.collection('rules');
        this.rules = this.rulesCollectionRef.valueChanges({
            idField: 'eventId',
        });
    }

    //Get List
    public getListRules(): Observable<Rule[]> {
        return this.rules;
    }

    // public getSpecificRules(id?: string): Observable<Rule[]> {
    //     console.log(id);
    //     const data = this.firestore
    //         .collection('rules')
    //         .valueChanges()
    //         .pipe(
    //             filter((val) => {
    //                 console.log(val);

    //             })
    //         );
    //     return data;
    // }

    //CrearMetasComponent
    public createRule(data: Rule): Promise<DocumentReference<Rule>> {
        return this.rulesCollectionRef.add(data);
    }

    public deleteRule(id: string): Promise<any> {
        return this.rulesCollectionRef.doc(id).delete();
    }
}
