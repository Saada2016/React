import React from 'react'

let Contact=()=>{
    return(
        <div className="container">
            <h1>How can we help you</h1>
            
            <section className="">
              
                <div className="form-row">
                    <div className="form-group">
                        <label>Please Select</label>
                        <div className="input-group col-md-1">
                            <div id="_gendor" className="btn-group radioBtn" data-active="0" >
                                <a className="form-control btn btn-primary btn-sm active" data-toggle="gendor" data-title="0">Mr</a>
                                <a className="form-control btn btn-primary btn-sm notActive" data-toggle="gendor" data-title="1">Ms</a>
                                <a className="form-control btn btn-primary btn-sm notActive" data-toggle="gendor" data-title="2">Mrs</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group required col-md-3">
                        <label className="control-label d-flex justify-content-start">First Name</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="firstName" id="_firstName" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="control-label d-flex justify-content-start">Middle Name</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="middleName" id="_middleName" />
                    </div>
                    <div className="form-group required col-md-3">
                        <label className="control-label d-flex justify-content-start">Last Name</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="lastName" id="_lastName" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Please Select</label>
                        <div className="input-group col-md-1">
                            <div id="_dependor" className="btn-group radioBtn" data-active="0" styles="margin-left: 1px;">
                                <a className="form-control btn btn-primary btn-sm active" data-toggle="depender" data-title="0">Father</a>
                                <a className="form-control btn btn-primary btn-sm notActive" data-toggle="depender" data-title="1">Spouse</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group required col-md-4">
                        <label className="control-label d-flex justify-content-start" id="_depender">Father Name</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="fatherName" id="_fatherName" />
                    </div>
                    <div className="form-group required col-md-3">
                        <label className="control-label d-flex justify-content-start">Occupation</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="occupation" id="_occupation" />
                    </div>
                    <div className="form-group required col-md-3">
                        <label className="control-label d-flex justify-content-start">Designation</label>
                        <input className="form-control _requiredInputs _input onlyStr" name="designation" id="_designation" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group required col-md-6">
                        <label className="control-label d-flex justify-content-start">Email</label>
                        <input className="form-control _requiredInputs _input" name="email" id="_email" />
                    </div>
                    <div className="form-group required col-md-6">
                        <label className="control-label d-flex justify-content-start">CNIC</label>
                        <input className="form-control _requiredInputs _input" type="tel" name="cnic" id="_cnic" placeholder="xxxxx-xxxxxxx-x" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group required col-md-4">
                        <label className="control-label d-flex justify-content-start">Mobile</label>
                        <input className="form-control _requiredInputs _input" type="tel" name="mobile" id="_mobile" placeholder="xxxx-xxxxxxx" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="control-label d-flex justify-content-start">Tel. (Residence)</label>
                        <input className="form-control _requiredInputs _input" type="tel" name="telRes" id="_telRes" placeholder="xxx-xxxxxxx" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="control-label d-flex justify-content-start">Tel. (Office)</label>
                        <input className="form-control _requiredInputs _input" type="tel" name="telOff" id="_telOff" placeholder="xxx-xxxxxxx" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group required col-md-12">
                        <label className="control-label d-flex justify-content-start">Address (Residence)</label>
                        <input className="form-control _requiredInputs _input" name="addRes" id="_addRes" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label className="control-label d-flex justify-content-start">Address (Office)</label>
                        <input className="form-control _requiredInputs _input" name="addOff" id="_addOff" />
                    </div>
                </div>
                
                   
               
            </section>
        </div>
    )
}
export default Contact;