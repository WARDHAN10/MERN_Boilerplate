import React, { Component } from 'react';

function LoginBtn(){

    return (
        <div>
            <div class="container my-3 bg-light">
                <div class="col-md-12 text-center">
                    <button type="button" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-warning">Cancel</button>
                </div>
            </div>
        </div>
    )


}

export default LoginBtn;