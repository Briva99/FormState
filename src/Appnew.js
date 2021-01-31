import React, { Component } from 'react';
import './App.css';
//import Textarea from './componen/Textarea';

export default class Appnew extends Component {
    render() {
        return (
            <div className ="Pembuka">
                <p>Ini Adalah Aplikasi Inputan Menggunakan React JS</p>
                <p>Selamat Mencoba</p>
               {/* pembuatan card dengan 2 kolom */}
               <div className="row" >
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <h5 classNames="card-title">Preview</h5>
                            </div>
                        </div>
                    </div>
                    <div classNames="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Create Soal</h5>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <div className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Pilih Jenis Soal
    <span class="caret"></span></button>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="google.com">Radio</a></li>
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="google.com">TextBox</a></li>
                                        <li role="presentation"><a role="menuitem" tabindex="-1" type="TextArea">TextArea</a></li>
                                        
                                    </ul>
                                </div><br></br><br></br>
                                <a href="google.com" class="btn btn-primary">Submit</a>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
