import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.cadastroForm = this.fb.group(
      {
        full_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        birthdate: ['', [Validators.required]],
        phone_number: ['', [Validators.required]],
        address: ['', [Validators.required]],
        occupation: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      // Limpa o erro passwordMismatch, se existir
      const errors = confirmPassword.errors;
      if (errors) {
        delete errors['passwordMismatch'];
        if (Object.keys(errors).length === 0) {
          confirmPassword.setErrors(null);
        } else {
          confirmPassword.setErrors(errors);
        }
      }
    }

    return null;
  }

  onSubmit() {
    console.log('entrou');
    if (this.cadastroForm.valid) {
      const fullName = this.cadastroForm.value.full_name.trim();
      const [firstName, ...rest] = fullName.split(' ');
      const lastName = rest.join(' ') || ' ';

      const registerPayload = {
        first_name: firstName,
        last_name: lastName,
        email: this.cadastroForm.value.email,
        password: this.cadastroForm.value.password,
        cover_url: 'https://default.cover/image.png',
      };

      console.log('Payload para backend:', registerPayload);

      this.userService.register(registerPayload).subscribe({
        next: (response) => {
          console.log('Resposta do backend:', response);
        },
        error: (err) => {
          console.error('Erro na requisição:', err);
        },
      });
    } else {
      console.warn('Formulário inválido');
    }
  }
}
