import React, {Component} from 'react';
import './Contacts.css';
import FormErrors from './FormErrors';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            formErrors: {email: '', phone: ''},
            emailValid: false,
            phoneValid: false,
            formValid: false

        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Недопустимые символы. Это поле \n' +
                    'может содержать только латиницу.';
                break;
            case 'phone':
                phoneValid = value.match(/^\d[\d\(\)\ -]{4,14}\d$/);
                fieldValidationErrors.phone = phoneValid ? '' : 'Недопустимые символы. Это поле \n' +
                    'может содержать только цифры.';
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.phoneValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div className="contacts_order">
                <React.Fragment>
                    <h2>Контактные данные</h2>
                    <div className="form-under_group">
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Имя</label>
                            <input type="text" name="name" placeholder="Имя"/>
                        </div>
                        <div className="form-group">
                            <label>&nbsp;&nbsp;Фамилия</label>
                            <input type="text" name="fullname" placeholder="Фамилия"/>
                        </div>
                    </div>
                    <div className={`form-under_group ${this.errorClass(this.state.formErrors.email)} form-group-email`}>
                        <div className="form-group">
                            <label htmlFor="email">&nbsp;&nbsp;Эл.почта</label>
                            <input type="email" required className="form-control" name="email"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.handleUserInput}  />
                            <FormErrors formErrors={this.state.formErrors} />
                            <FormErrors formErrors={this.state.formErrors.email} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.phone)} form-group-phone`}>
                            <label htmlFor="phone">&nbsp;&nbsp;Номер телефона</label>
                            <div className="phone_form">
                                <p>+7</p>
                                <input type="phone" className="form-control" name="phone" maxlength="10"
                                       placeholder="999 432-34-21"
                                       value={this.state.phone}
                                       onChange={this.handleUserInput}  />
                            </div>
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                        </div>
                </React.Fragment>
            </div>

        );
    }
}

export default Contacts;