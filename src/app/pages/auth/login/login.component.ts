import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form Validation
  loginForm!: FormGroup
  submitted: boolean = false
  msgStatus: string = ''

  userData = {
    "username": "",
    "password": ""
  }

  constructor(
    private route: Router,
    private http: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Validate Form
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // ฟังก์ชัน submitLogin
  submitLogin(){

    this.submitted = true

    if(this.loginForm.valid){
      this.userData.username = this.loginForm.value.username
      this.userData.password = this.loginForm.value.password
      // console.log(this.userData)

      // เรียกใช้งาน API
      this.http.LogIn(this.userData).subscribe((data: {}) => {

        // console.log(data);
        if(data != ""){
          this.msgStatus = "<p class='alert alert-success text-center'>Login Success</p>"
          // Redirect ไปหน้า backend
          this.route.navigate(['backend'])
        }else{
          // alert("Login Fail!!")
          this.msgStatus = "<p class='alert alert-danger text-center'>Login Fail!!</p>"
        }

      })

    }

  }

}
