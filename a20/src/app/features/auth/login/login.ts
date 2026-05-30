import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../../../core/services/auth';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  private destroy$ = new Subject<void>();

  errorMessage = signal('');
  login!: FormGroup;
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['admin', [Validators.required]],
    });
  }

  onSubmit(){
    this.auth.login(this.login.value.email, this.login.value.password).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: boolean) => {
      if(data) {
        this.router.navigate(['/user']);
      }
    });
  }

  updateErrorMessage() {
    if (this.login.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.login.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
