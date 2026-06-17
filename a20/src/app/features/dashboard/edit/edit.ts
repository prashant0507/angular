import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserById } from '../../../store/selectors/user.selectors';
import { UserActions } from '../../../store/actions/user.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements OnInit {
  hobbyList = ["dance", "sing", "acting", "tennis", "badminton", "harmonium", "swiming", "shooting"]
  allCountries = ['India', 'USA', 'UK'];
  private editFormBuilder = inject(FormBuilder);
  editForm: FormGroup = this.editFormBuilder.group({
    name: [''],
    email: [''],
    gender: [''],
    countries: [''],
    hobbies: [''],
  });
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  userId!: number;

  //userDetailBySelectorUsingSignal = toSignal(this.store.select(selectUserById));

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(UserActions.loadDetalUsers({ id: this.userId }));
    this.store.select(selectUserById).subscribe((user: User) => {
      this.editForm.patchValue({
        name: user?.name,
        email: user?.email,
        gender: user?.gender,
        countries: user?.country,
        hobbies: user?.hobbies ?? []
      })
    })
  }

  // This method checks whether a specific hobby is already selected in the form.
  isHobbySelected(hobby: string): boolean {
    return this.editForm.get('hobbies')?.value?.includes(hobby) || false;
  }

  toggleHobby(hobby: string, checked: boolean): void {
    const current = this.editForm.get('hobbies')?.value || [];
    // This block runs when the checkbox for a hobby has been turned on
    if (checked) {
      this.editForm.patchValue({
        hobbies: [...current, hobby]
      });
    } else {
      // The else branch runs when the checkbox is being unchecked. It removes the hobby by filtering the array:
      this.editForm.patchValue({
        hobbies: current.filter((item: string) => item !== hobby)
      });
    }
  }

   onSubmit() {
    console.log(this.editForm.value);
  }

}
