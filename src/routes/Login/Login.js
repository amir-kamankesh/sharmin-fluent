import React, { Component } from 'react';
import './Login.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Icon } from "office-ui-fabric-react";
import { PrimaryButton } from "office-ui-fabric-react";
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';


export default class Login extends Component {
    state = {
        username: {
            value: '',
            errorMessage: ' لطفا نام کاربری را وارد نمایید ',
            haveError: false
        },
        password: {
            value: '',
            errorMessage: ' لطفا رمز عبور را وارد نمایید ',
            haveError: false
        },
        submitDisabled: true,
        loading: false
    };

    checkSubmitDisable = () => {
        const username = this.state.username.value;
        const password = this.state.password.value;
        this.setState({
            submitDisabled: (username === '' || password === '')
        });
    };

    onFormInputChangeHandler = (event) => {
        let inputState = {...this.state[event.target.name]};
        inputState.value = event.target.value;
        inputState.haveError = inputState.value === '';
        this.setState({
            [event.target.name]: inputState
        }, () => {
            this.checkSubmitDisable();
        });
    };

    onFormSubmitHandler = (event) => {
        const currentDisabled = this.state.submitDisabled;
        this.setState({
            submitDisabled: !currentDisabled,
            loading: true
        });
        // api call simulation
        setTimeout(() => {
            this.props.history.push('/management');
        }, 2000);
    };

    render() {
        return (
            <div className="login ms-Grid" dir="rtl">

                <div className="sharmin-title">
                    SharminCms
                    <Icon iconName="Processing" className="process-icon"/>
                </div>

                <div className="ms-Grid-row-fluid form-container">

                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4 ms-lgPush4 content-container">

                        <div className="login-title">
                            اطلاعات کاربری را وارد نمایید
                        </div>

                        <div className="login-input">
                            <TextField className="textField-cssStyled"
                                       placeholder=" نام کاربری "
                                       autoComplete="off"
                                       name="username"
                                       errorMessage={(this.state.username.haveError)? this.state.username.errorMessage: ""}
                                       onChange={this.onFormInputChangeHandler}/>
                        </div>

                        <div className="login-input">
                            <TextField type="password"
                                       className="textField-cssStyled"
                                       placeholder=" رمز عبور "
                                       autoComplete="off"
                                       name="password"
                                       errorMessage={(this.state.password.haveError)? this.state.password.errorMessage: ""}
                                       onChange={this.onFormInputChangeHandler}/>
                        </div>

                        <div className="login-input">
                            <PrimaryButton
                                className="primaryButton-cssStyled"
                                text=" ورود "
                                disabled={this.state.submitDisabled}
                                onClick={this.onFormSubmitHandler}
                            />
                        </div>

                        <div className="login-input">
                            <a href="/"> رمز عبور خود را فراموش کرده اید ؟ </a>
                        </div>

                        {
                            (this.state.loading)?
                                <div className="login-input">
                                    <ProgressIndicator description=" در حال احراز هویت ... "/>
                                </div>
                            : ""
                        }

                    </div>

                </div>

            </div>
        );
    }
}
