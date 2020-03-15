import React, {Component} from 'react';
import './Contacts.css';
import FormErrors from './FormErrors';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fullname: '',
            email: '',
            phone: '',
            formErrors: {name: '',fullname: '',email: '', phone: ''},
            nameValid: false,
            fullnameValid: false,
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
        let nameValid = this.state.nameValid;
        let fullnameValid = this.state.fullnameValid;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.match(/^[А-Я][а-я]*/);
                fieldValidationErrors.name = nameValid ? '' : ' Недопустимые символы. Это поле \n' +
                    'может содержать только русские буквы.';
                break;
            case 'fullname':
                fullnameValid = value.match(/^[А-Я][а-я]*/);
                fieldValidationErrors.fullname = fullnameValid ? '' : ' Недопустимые символы. Это поле \n' +
                    'может содержать только русские буквы.';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Недопустимые символы. Это поле \n' +
                    'может содержать только латиницу.';
                break;
            case 'phone':
                phoneValid = value.match(/^\d[\d\(\)\ -]{4,14}\d$/);
                fieldValidationErrors.phone = phoneValid ? '' : 'Недопустимые символы. Это поле \n' +
                    'может содержать только цифры.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            fullnameValid: fullnameValid,
            emailValid: emailValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.fullnameValid && this.state.emailValid && this.state.phoneValid});
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
                        <div className={`form-under_group ${this.errorClass(this.state.formErrors.name)}`}>
                            <div className="form-group">
                                <label htmlFor="name">&nbsp;&nbsp;Имя</label>
                                <input type="name" required className="form-control" name="name"
                                       placeholder="Имя"
                                       value={this.state.name}
                                       onChange={this.handleUserInput}  />
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                        </div>
                        <div className={`form-under_group ${this.errorClass(this.state.formErrors.fullname)} form-group-fullname`}>
                            <div className="form-group">
                                <label htmlFor="fullname">&nbsp;&nbsp;Фамилия</label>
                                <input type="fullname" required className="form-control" name="fullname"
                                       placeholder="Фамилия"
                                       value={this.state.fullname}
                                       onChange={this.handleUserInput}  />
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
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